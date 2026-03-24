export const blogPosts = [
    {
        id: 1,
        slug: "ai-asset-validation-unity",
        title: "Why Your Unity Project Needs Automated Asset Validation",
        excerpt: "Messy assets slow down your whole team. Here's how AI-powered validation can catch issues before they become real problems — broken references, wrong import settings, inconsistent naming and more.",
        date: "Mar 20, 2026",
        category: "Editor Tooling",
        readTime: "6 min read",
        content: `
## The Hidden Cost of Bad Assets

Every Unity developer has been there. You open a project after a few weeks and suddenly half your textures are at the wrong compression, a model has a missing material, and nobody knows when it happened.

Asset management doesn't seem urgent — until it is. Broken references cause build failures. Wrong import settings bloat your game size. Inconsistent naming makes searching a nightmare. These aren't big dramatic bugs. They're slow, silent leaks that drain your team's time.

## What "Asset Validation" Actually Means

Validation is simply checking that your assets follow a set of rules before they cause problems. Rules like:

- **Naming conventions** — Is this texture called \`T_WoodPlank_D\` or \`wood plank diffuse final2\`?
- **Import settings** — Is this UI sprite set to Sprite mode, or did it get imported as Default texture?
- **Missing references** — Does this prefab reference a material that no longer exists?
- **Size limits** — Is this audio clip 80MB because someone forgot to set compression?

Checking these manually is fine for 50 assets. For 500+, it becomes a part-time job.

## Where AI Changes the Game

Rule-based validators are useful, but they're rigid. You have to define every rule upfront and update them as your project evolves.

AI-powered validation works differently. Instead of just checking against a fixed ruleset, it can:

- **Understand context** — A texture named "icon" in a UI folder is probably fine. The same texture in a 3D models folder is suspicious.
- **Suggest fixes, not just errors** — Instead of flagging "wrong compression", it can say: "This texture looks like a normal map. Set it to Normal Map format and disable sRGB."
- **Learn from your project** — The more it sees your conventions, the better its suggestions become.

## A Practical Example

Imagine you drag in a new 3D character model. An AI validator can:

1. Check the mesh complexity and flag if it's too dense for a mobile target
2. Detect that the attached material uses an unoptimized shader for the render pipeline you're on
3. Notice the texture names don't match the project convention and suggest renames
4. Warn that there's no LOD group for an asset this size

All of this happens on import, before the asset ever touches a scene.

## The Shift From Reactive to Proactive

The real value isn't the fixes — it's the shift in mindset. When validation is automatic, you stop doing archaeology on your own project. You stop having "who touched this?" conversations. You start shipping with confidence.

That's the goal behind **Assets Validator**. Not a list of warnings to ignore, but a tool that actively helps you keep your project clean as it grows.

---

*Assets Validator is currently in development. Follow our updates to be notified when it's available.*
        `
    },
    {
        id: 2,
        slug: "inventory-system-unity-design",
        title: "Designing a Flexible Inventory System in Unity: What Most Tutorials Miss",
        excerpt: "Most inventory tutorials give you a working demo that breaks the moment you try to extend it. Here's how to design one that actually scales — items, stacking, crafting, and equipment in one clean system.",
        date: "Mar 10, 2026",
        category: "Gameplay Systems",
        readTime: "8 min read",
        content: `
## The Problem with "Simple" Inventory Tutorials

Search for Unity inventory tutorials and you'll find hundreds of them. Most will get you a working grid in an afternoon. But try adding crafting to that grid, or an equipment system, or item modifiers — and you're usually rewriting from scratch.

The issue isn't the code. It's the design. Most tutorials optimize for "easy to follow" over "easy to extend." That's fine for learning, but not for a real project.

This post covers the architectural decisions that actually matter when building an inventory you won't hate in 6 months.

## Start with the Item Definition

Everything in an inventory system flows from how you define an Item. The most common mistake is making it a MonoBehaviour or a plain class with a pile of fields:

\`\`\`csharp
// The approach that will haunt you later
public class Item {
    public string name;
    public Sprite icon;
    public int damage;        // What if it's armor?
    public float weight;
    public bool isStackable;
    public int maxStack;
    public bool isEquippable;
    public EquipSlot slot;    // And now it knows about equipment...
}
\`\`\`

The item is now coupled to every system it touches. Adding crafting means adding more fields. It never ends cleanly.

## Use ScriptableObjects with Composition

A better pattern: keep the Item definition as a \`ScriptableObject\` with only universal data, and attach behavior through separate components or data modules.

\`\`\`csharp
[CreateAssetMenu]
public class ItemDefinition : ScriptableObject {
    public string itemId;
    public string displayName;
    public Sprite icon;
    public string description;

    // Modules define what this item *can do*
    public StackableData stackable;      // null = not stackable
    public EquipmentData equipment;      // null = not equippable
    public ConsumableData consumable;    // null = not consumable
}
\`\`\`

Now your item database is clean. A sword has \`EquipmentData\`. A potion has \`ConsumableData\`. A crafting material has \`StackableData\`. They don't know about each other.

## Separate "Definition" from "Instance"

A \`ScriptableObject\` is shared data — it's the *blueprint*. But an item *in* the inventory is an instance. It has a quantity, maybe durability, maybe enchantments. These are different concepts.

\`\`\`csharp
public class ItemStack {
    public ItemDefinition definition;
    public int quantity;
    public Dictionary<string, object> runtimeData; // for durability, enchants, etc.
}
\`\`\`

The inventory holds \`ItemStack\` instances. The database holds \`ItemDefinition\` assets. Keeping these apart makes serialization, saving, and networking all much simpler.

## Crafting as Data, Not Logic

The most extensible crafting systems don't hard-code recipes in code. They're data-driven:

\`\`\`csharp
[CreateAssetMenu]
public class CraftingRecipe : ScriptableObject {
    public List<ItemRequirement> ingredients;
    public List<ItemStack> outputs;
    public float craftTime;
    public string craftingStationType; // "Workbench", "Furnace", etc.
}
\`\`\`

Your crafting *system* just queries: "do I have all ingredients? If yes, consume them and produce outputs." Adding 200 recipes means adding 200 ScriptableObject assets, not touching any logic.

## Equipment as Slot Management

Equipment is just an inventory with named, typed slots. A slot can hold one item of a specific type. When an item is "equipped", it moves from the general inventory to the equipment inventory.

This framing makes equipment UI straightforward — you're rendering a small inventory where each slot has a label and a filter.

## The Payoff

When your foundation is solid — item definitions as ScriptableObjects, instances separate from definitions, systems decoupled from items — extending becomes adding, not rewriting.

Want loot tables? Add a \`LootTableData\` ScriptableObject.
Want item rarity? Add a field to \`ItemDefinition\`.
Want trading? It's just moving stacks between two inventories.

That's the philosophy behind **Inventory Pro**: build the right foundation once, and everything else clicks into place.

---

*Inventory Pro is currently in development. Join our mailing list to be notified on release.*
        `
    },
    {
        id: 3,
        slug: "unity-scene-management-patterns",
        title: "Unity Scene Management: Beyond LoadScene",
        excerpt: "Single-scene workflows break down fast on real projects. Here's a practical look at additive scene loading, dependency tracking, and why visualizing your scene graph will save you hours of debugging.",
        date: "Feb 28, 2026",
        category: "Architecture",
        readTime: "7 min read",
        content: `
## The Single-Scene Trap

When you start a Unity project, throwing everything into one scene feels natural. It's simple. You can see everything at once. \`SceneManager.LoadScene("Main")\` does the job.

Then the project grows. The scene gets slow to load. Artists are constantly in merge conflicts over it. You want to stream in levels. You want persistent systems that survive scene transitions. Suddenly, one scene isn't enough.

This is where most developers reach for \`LoadSceneMode.Additive\` — and immediately discover that additive loading without a strategy is just a different kind of chaos.

## What Additive Loading Actually Buys You

Additive scenes let you have multiple scenes loaded simultaneously. The key uses:

**Separation of concerns** — UI in one scene, lighting in another, gameplay in another. Artists own their scenes. Programmers own theirs. Merge conflicts drop dramatically.

**Streaming** — Load and unload scene chunks at runtime based on player position. This is how open-world games work.

**Persistent systems** — A "Core" scene that never unloads holds your GameManager, AudioManager, EventSystem. It loads first and stays.

**Testing** — Load just the scene you're working on without bootstrapping the entire game.

## The Dependency Problem

Here's what nobody tells you about additive scenes: they create invisible dependencies.

Your gameplay scene might need:
- The Core scene (for GameManager)
- The UI scene (for HUD)
- The Lighting scene (for global volume settings)
- The Audio scene (for the mixer)

If you load the gameplay scene standalone (say, to test it quickly), half of it breaks silently. No errors, just wrong behavior.

Without explicit dependency tracking, this problem scales with your project. Every developer has a slightly different mental model of "what needs to be loaded first."

## Tracking Dependencies Explicitly

The solution is to make dependencies data, not convention:

\`\`\`csharp
[CreateAssetMenu]
public class SceneReference : ScriptableObject {
    public string scenePath;
    public List<SceneReference> dependencies;
    public bool loadAdditively;
    public bool persistAcrossTransitions;
}
\`\`\`

Now when you load a scene, your manager resolves the full dependency tree first. Load "Gameplay" and it automatically loads Core, UI, and Lighting if they aren't already loaded.

## Visualizing the Scene Graph

When dependencies are data, you can visualize them. A simple node graph showing which scenes depend on which others makes onboarding new developers dramatically faster.

More importantly, it makes cycles visible. Scene A depends on Scene B which depends on Scene A — these are easy to create accidentally and painful to debug. A visual graph catches them immediately.

## Quick Switching in the Editor

One of the biggest productivity wins in a multi-scene setup is fast in-editor switching. Instead of opening scenes through the Project window and waiting for load, a quick switcher lets you:

- See all scenes in the project at a glance
- Load any scene (with its dependencies) with one click
- Pin frequently-used scene combinations as "profiles"
- Switch to a "test" profile that strips out non-essential scenes for faster iteration

The time saved on a project with 20+ scenes adds up faster than you'd expect.

## Putting It Together

Good scene management isn't about clever code. It's about making the structure of your project explicit and tooling around that structure.

Define your scenes as assets. Track their dependencies. Visualize the graph. Make switching fast.

That's the thinking behind **Scene Manager** — take the patterns that large studios use internally and make them accessible without requiring you to build the tooling yourself.

---

*Scene Manager is currently in development. Watch this space for updates.*
        `
    }
];

export const getPostBySlug = (slug) => blogPosts.find(p => p.slug === slug);
