//black iron ingot
craftingTable.addShapedMirrored("black_iron_ingot", <item:extendedcrafting:black_iron_ingot>, [
  	[<item:extendedcrafting:black_iron_nugget>, <item:extendedcrafting:black_iron_nugget>, <item:extendedcrafting:black_iron_nugget>],
  	[<item:extendedcrafting:black_iron_nugget>, <item:extendedcrafting:black_iron_nugget>, <item:extendedcrafting:black_iron_nugget>],
  	[<item:extendedcrafting:black_iron_nugget>, <item:extendedcrafting:black_iron_nugget>, <item:extendedcrafting:black_iron_nugget>]
    ]);

//black iron block
craftingTable.addShapeless("black_iron_block", <item:extendedcrafting:black_iron_ingot> * 9,
      [<item:extendedcrafting:black_iron_block>]
    );

//the_ultimate_ingot
    mods.extendedcrafting.TableCrafting.addShaped("the_ultimate_ingot", 4, <item:extendedcrafting:the_ultimate_ingot>, [
    	[<item:minecraft:clay>, <item:minecraft:coal_block>, <item:mekanism:block_fluorite>, <item:minecraft:ice>, <item:minecraft:iron_block>, <item:thermal:lead_block>, <item:astralsorcery:marble_raw>, <item:thermal:niter_block>, <item:minecraft:obsidian>],
    	[<item:minecraft:prismarine_bricks>, <item:thermal:rubber_block>, <item:mekanism:block_salt>, <item:minecraft:conduit>, <item:minecraft:slime_block>, <item:thermal:tin_block>, <item:thermal:apatite_block>, <item:astralsorcery:starmetal>, <item:thermal:bitumen_block>],
    	[<item:extendedcrafting:black_iron_block>, <item:pneumaticcraft:compressed_iron_block>, <item:thermal:gunpowder_block>, <item:powah:dielectric_paste>, <item:botania:manasteel_block>, <item:thermal:nickel_block>, <item:tconstruct:seared_bricks>, <item:thermal:silver_block>, <item:minecraft:bone_block>],
    	[<item:mekanism:block_steel>, <item:minecraft:rotten_flesh>, <item:minecraft:netherite_block>, <item:thermal:copper_block>, <item:botania:elementium_block>, <item:minecraft:ender_pearl>, <item:thermal:invar_block>, <item:minecraft:quartz_block>, <item:mekanism:block_osmium>],
    	[<item:mekanism:block_uranium>, <item:minecraft:white_wool>, <item:tconstruct:slimesteel_block>, <item:thermal:sulfur_block>, <item:minecraft:wither_skeleton_skull>, <item:thermal:bronze_block>, <item:appliedenergistics2:quartz_block>, <item:tconstruct:cobalt_block>, <item:thermal:constantan_block>],
    	[<item:minecraft:gold_block>, <item:mekanism:dust_lithium>, <item:mekanism:block_refined_obsidian>, <item:extendedcrafting:nether_star_block>, <item:thermal:cinnabar_block>, <item:thermal:electrum_block>, <item:appliedenergistics2:fluix_block>, <item:tconstruct:hepatizon_block>, <item:tconstruct:manyullyn_block>],
    	[<item:minecraft:glowstone>, <item:tconstruct:queens_slime_block>, <item:tconstruct:rose_gold_block>, <item:appliedenergistics2:silicon>, <item:thermal:basalz_rod>, <item:thermal:blitz_rod>, <item:thermal:blizz_rod>, <item:minecraft:end_stone>, <item:minecraft:lapis_block>],
    	[<item:thermal:lumium_block>, <item:tconstruct:pig_iron_block>, <item:minecraft:redstone_block>, <item:mekanism:block_refined_glowstone>, <item:botania:blaze_block>, <item:minecraft:popped_chorus_fruit>, <item:minecraft:dragon_egg>, <item:fluxnetworks:flux_dust>, <item:thermal:signalum_block>],
    	[<item:minecraft:diamond_block>, <item:draconicevolution:awakened_draconium_block>, <item:draconicevolution:draconium_block>, <item:minecraft:emerald_block>, <item:thermal:enderium_block>, <item:botania:terrasteel_block>, <item:kubejs:valdanium_block>, <item:minecraft:air>, <item:minecraft:air>]
    ]);
