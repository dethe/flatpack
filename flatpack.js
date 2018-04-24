var storyContent = ﻿{"inkVersion":17,"root":[{"->":"step_five"},"done",{"background":["^<code><b>Background</b></code>","\n","^You and your friend were separated in the chaos following the invasion, but you had agreed to meet up at the abandoned castle outside of town that had been repurposed into an Ekia showroom. You have made your way to the entrance room of the castle.","\n","done",{"#f":3}],"step_five":["^<code><b>Step Five</b></code>","\n","^<code>Insert the tab [32] into the slot [13] and use the allen wrench to tighen the screw [26].</code>","\n","^<i>You have: One (1) instruction booklet, one (1) partially assembled crossbow, one (1) allen wrench, one (1) oddly shaped piece of metal, three (3) extra screws.</i>","\n","^You're not sure which slot is the right one, where this odd bit goes, or why there are leftover screws. Perhaps you should have read the instructions more carefully.","\n","^There is a high-pitched whining howl from outside, getting closer. A shiver runs down your spine.","\n",["ev","str","^Start at the beginning","/str","/ev",{"*":".^.c","flg":20},{"c":["\n",{"->":"start_beginning"},"\n",{"#f":7}]}],["ev","str","^There isn't time, try to make it work","/str","/ev",{"*":".^.c","flg":20},{"c":["\n",{"->":"try_to_make_it_work"},"\n",{"#f":7}]}],{"#f":3}],"start_beginning":["^<code><b>Assembly instructions for Ekia Sköl light repeating crossbow</b></code>","\n","^<code>Please read instructions carefully before assembly. If any parts are missing, please call our toll-free number.</code>","\n","^<code>WARNING: This is a deadly weapon and not suitable for children.</code>","\n","^<code>The diagram of the finished crossbow does not look like what you hold in your hands. You aren't at all sure how to disassemble it far enough to start over. Perhaps it will work as a club.</code>","\n","^<i>You are standing in a room in a (probably) abandoned castle. There is a table and chairs here. There is an Ekia Bürrn fireplace here.</i>","\n","^You wish ",["G>","ev",{"VAR?":"friend_name"},"out","/ev","G<",null],"^ were here, ",["G>","ev",{"VAR?":"friend_pronoun"},"out","/ev","G<",null],"^ was always good with this kind of detail.","\n","^The night is getting cold. The howling is getting closer.","\n",["ev","str","^Make a fire","/str","/ev",{"*":".^.c","flg":20},{"c":["\n",{"->":"make_a_fire"},"\n",{"#f":7}]}],["ev","str","^Bar the door","/str","/ev",{"*":".^.c","flg":20},{"c":["\n",{"->":"bar_the_door"},"\n",{"#f":7}]}],{"#f":3}],"make_a_fire":["^<code><b>Building a fire in your Ekia Bürrn fireplace</b></code>","\n","^<code>Build your flammable material in layers. First a layer of tinder (crumpled paper will work), then a layer of small sticks, a layer of larger sticks, and then a layer of logs. Arrange each layer to provide good airflow to the layer above.</code>","\n","^<i>You have: one (1) Ekia Bürrn fireplace instruction manual, twenty (20) wooden matches in a box with a striker, one (1) Ekia Tableau dining table, and four (4) Ekia Squatz dining chairs.</i>","\n","^You tear out this page from the Ekia Bürrn fireplace instruction manual and crumple it into a ball. The rest of the manual, and the crossbow manual go on top. You break up a chair and add it to the fireplace. It looks like whoever installed it wasn't much better at reading assembly instructions than you, so you hope the vent is hooked up. You light it with the matches. The room gets very smoky until the chair starts burning well, then it clears a bit.","\n","^With the fireplace lit, you feel better (and much warmer).","\n",["ev","str","^Search for food","/str","/ev",{"*":".^.c","flg":20},{"c":["\n",{"->":"search_for_food"},"\n",{"#f":7}]}],["ev","str","^Search for weapons","/str","/ev",{"*":".^.c","flg":20},{"c":["\n",{"->":"search_for_weapons"},"\n",{"#f":7}]}],{"#f":3}],"try_to_make_it_work":["^<code><b>Using your Ekia Sköl light repeating crossbow.</b></code>","\n","^<code>Using the cocking foot (24) tension the cable (11) and cock it behind the trigger mechanism (12b). Make sure the trigger mechanism is in the forward position first. Do not overtighten the cable (11). Make sure the safety catch (33) is in the locked position.</code>","\n","^<code>When the cable is under tension, carefully insert one (1) Ekia Bûllette light crossbow bolt into slot (3). Your Ekia Sköl light crossbow is now ready to fire. Be sure to read the firearm safety instructions and do not aim crossbow at people, even if the safety is in the locked position.</code>","\n","^<i>You have: one (1) hastily assembled Ekia Sköl light crossbow, one (1) bag of Ekia Bûllette light crossbow bolts (unassembled), one (1) gnawing hunger, many unnameable horrors approaching.</i>","\n","^You can't find anything which looks like the picture of the cocking foot, but you manage, with some struggle, to get the wire tucked behind the trigger using the spare piece. You screw the heads on each of the 20 bolts in the bag, tuck one in the guide slot in front of the wire. It doesn't look like it could stop anything bigger than a rabbit.","\n","^If you go further into the castle you might find something more useful as a weapon, or a room that is easier to blockade.","\n",["ev","str","^Move deeper into the castle","/str","/ev",{"*":".^.c","flg":20},{"c":["\n",{"->":"portcullis"},"\n",{"#f":7}]}],["ev","str","^Use the croossbow to booby-trap the door","/str","/ev",{"*":".^.c","flg":20},{"c":["\n",{"->":"booby_trap"},"\n",{"#f":7}]}],{"#f":3}],"bar_the_door":["^<code><b>Locking the Ekia Portaal door</b></code>","\n","^<code>The Ekia Portaal door is equipped with the latest state-of-the-art keyless entry system. To lock the door, simply enter your 32-digit access code (AC), press the Aleph and Omeg buttons simultaneously, hold the latchkey in the active position, and apply three short raps to the touchpad. If you have any difficulties locking or unlocking your Ekia Portaal door, please refer to Ekia Portaal instruction manual, volumes 1399-1450 for step-by-step troubleshooting.</code>","\n","^<i>You have one (1) Ekia Portaal door, one (1) Ekia Tableau dining table, and four (4) Ekia Squatz dining chairs.</i>","\n","^You jam one of the chairs under the handle of the door. You flip the table against it, wedge in the remaining chairs as best you can, and even use the leftover screws from the crossbow to wedge the door closed. Not sure how long it will hold, but it's the best you can manage.","\n","^From outside you hear ",["G>","ev",{"VAR?":"friend_name"},"out","/ev","G<",null],"^'s voice calling your name. \"It's me, are you in there? Let me in, they're getting close!\"","\n","^You tell yourself that the creatures are masters at imitating voices, that there's little chance that ",["G>","ev",{"VAR?":"friend_name"},"out","/ev","G<",null],"^ made it this far. The voice sounds so convincing though, what if she really did get to the castle too? You did plan to meet here, after all.","\n","^The voice pleads desperately, \"please let me in, I don't want to die alone out here, not like this! They're almost here, please let me in! I love you, please let me in!\"","\n",["ev","str","^Open the door","/str","/ev",{"*":".^.c","flg":20},{"c":["\n",{"->":"die_horribly"},"\n",{"#f":7}]}],["ev","str","^Explore deeper in the castle","/str","/ev",{"*":".^.c","flg":20},{"c":["\n",{"->":"childrens_room"},"\n",{"#f":7}]}],{"#f":3}],"die_horribly":["^<code><b>Unlocking the Ekia Portaal door</b></code>","\n","^<code>To unlock the Ekia Portaal door, apply your left thumb to the biometric response panel while typing your 38-digit identification code (IC) into the numeric keypad. If your Ekia Portaal door does not have a numeric keypad, you must use the downloadable app to enter your 25-digit personal authorization code (PAC) and your 14-digit secure backup access number (SBAN).</code>","\n","^<i>You are in a room with all the dining room furniture piled against the door. It does not look safe, someone could easily be injured. If anyone is injured through using Ekia furnishings in a non-authorized way, Ekia cannot and willnot be held liable, and all warranties will be voided.</i>","\n",["G>","ev",{"VAR?":"friend_name"},"out","/ev","G<",null],"^'s voice is shaking as she beg and pleads for you to let her in.","\n","^You desperately pull all the furniture away from the door and unscrew the extra scews. One of the screws is stripped and the allen wrench is ineffectual. \"Push on the door!\" you shout to her.","\n","^There is a thud against the door and the last screw pops free. Another heavy thud and the door slams into you, knocking you back across the room. As they pour into the room, and lock their mandibles on your limbs, some of them are still crying out in ",["G>","ev",{"VAR?":"friend_name"},"out","/ev","G<",null],"^'s voice, \"please let me in, I don't want to die alone! I love you!\" You hear as much as feel your bones breaking, then thir long, probing tongues begin sucking out your soft organs and you feel nothing at all.","\n","done",{"#f":3}],"childrens_room":["^<code><b>Tinylaand</b></code>","\n","^<code>Please follow the rules while in Tinylaand:","\n","^<ol>","\n","^<li>No spitting</li>","\n","^<li>No cussing</li>","\n","^<li>No hitting</li>","\n","^<li>The ball pit is not a toilet</li>","\n","^<li>Do not change the channels on the TVs. There is a TV for each channel, if you want to watch a different channel, please move to a different TV.</li>","\n","^<li>Parents must stay in the building, any children who are unclaimed after one (1) hour will have their parents reported to Children's Services</li>","\n","^</ol>","\n","^</code>","\n","^<i>You are in a room filled with soft toys, soft furniture, and soft lighting, all in gentle pastel colours. There are sixteen (16) televisions here, but none of them are turned on.</i>","\n","^You can still hear ",["G>","ev",{"VAR?":"friend_name"},"out","/ev","G<",null],"^ begging for her life with you, and then shouting to curse your name, and then screaming in terror. It goes on for far too long, and continues even when large, heavy, carapaced bodies begin thudding against the door. There's no way it will hold long, you have to keep moving.","\n","^There is an Ekia Snuggi bear, ",["G>","ev",{"VAR?":"friend_name"},"out","/ev","G<",null],"^'s favourite.","\n","^[Take bear and go through low arch towards the dungeons] ",{"->":"dungeons"},"\n","^There is a blanket fort some enterprising children made","\n","^[Explore blanket fort] ",{"->":"garden"},"\n",{"#f":3}],"garden":["^<code><b>Using the Ekia Duug trenching tool</b></code>","\n","^<code>Before digging a latrine, defensive trench, grave, or escape tunnel, move the blade from position 1) (closed) to position 2) (pick) or position (3) shovel. The pick position is used for rapidly loosening soil, the shovel position is for removing soil from the digging area. NOTE: the Ekia Duug trenching tool is not recommended to use as a weapon, using it as a weapon will void its warranty.</code>","\n","^<i>You are in the garden section, surrounded by planters and decorative vases. There is an Ekia Duug trenching tool on the floor by the exit of an escape tunnel. There is a shed containing an Ekia Buuz chainsaw. Outside the chainlink fence a path leads down into the ravine to the river. A door leads into the kitchen.</i>","\n","^The children apparently used their blanket fort to dig an escape tunnel from Tinylaand. Smart kids. You help yourself to the chainsaw and heft the trenching tool.","\n","^[Go through gate in chainlink fence to river] ",{"->":"river"},"\n","^[Go into the kitchen] ",{"->":"die_in_kitchen"},"\n",{"#f":3}],"river":["^You make rapid progress along the river, soon coming to an armed encampment. It is an outpost of humans, nested defensively in the caves along the ravine, with acess to clean water and able to hold off the invaders indefinitely. There may be no-where completely safe in this world, but you have escaped for now.","\n","done",{"#f":3}],"die_in_kitchen":["^You aren't the first to discover the kitchen, the creatures are already there. When they see you coming they stop struggling to open the canned meatballs and eat you instead.","\n","done",{"#f":3}],"search_for_food":["^<code><b>Ekia Kefte meatballs</b></code>","\n","^<code>Warming instructions: Place Ekia Kefte meatballs in a microwave-safe container and head on HIGH for 5 minutes. DO NOT BOIL. Use caution, as meatballs will be hot after heating. Serve with Ekia Berg salad and Ekia Viino red wine.</code>","\n","^You find several cases of Ekia meatballs in sauce. You manage to open one with the odd part you have left over and some struggle, and wedge it into the fire to heat up. The door handle rattles and as the catch disengages you panic, thinking the creatures have arrived while you were distracted, and then you see ",["G>","ev",{"VAR?":"friend_name"},"out","/ev","G<",null],"^ come through the door. You hug each other in releif, and together you move the furniture to block the door. You share the hot meatballs, eating them out of the can with your fingers, getting sauce everywhere and laughing. For the first time you feel like something is right with the world.","\n","^[Fall asleep by the fire] ",{"->":"die_happy"},"\n","^[Move deeper into the castle] ",{"->":"dining_room"},"\n",{"#f":3}],"die_happy":["^You felt so goo at being reunited with ",["G>","ev",{"VAR?":"friend_name"},"out","/ev","G<",null],"^ that you both let your guard down. Warm and fed, you fall asleep in each other's arms, you never even hear the creatures burst through the door, never even wake up.","\n","done",{"#f":3}],"dining_room":["^You grab several bags of Ekia Parfiin candles as you pass swiftly through.","\n","^[Go up stairs] ",{"->":"upper_showroom"},"\n","^[Go into office] ",{"->":"office"},"\n",{"#f":3}],"upper_showroom":["^You hear a crash behind you as the creatures come through your crude barricade. You rush up the stairs together, but the upstairs showroom is closed after hours and there is a metal gate across it. ",["G>","ev",{"VAR?":"friend_name"},"out","/ev","G<",null],"^ tries to pick the lock, but there is no time, the creatures are upon you. You look bravely into each other's eyes at the end.","\n","done",{"#f":3}],"office":["^This room was for managers, and before that for the elite guards, it has a heavy reinforced door that can be barred from the inside. There is a computer here, which seems to be on backup power, the phosphorecent green screen beckons to you. Amazingly enough, it even has internet access, so not all of the world has crumbled.","\n","^[Send goodbye messages to loved ones] ",{"->":"die_content"},"\n","^[Check the news] ",{"->":"await_rescue"},"\n",{"#f":3}],"die_content":["^After you send emails telling your family you love them, you hear the creatures arrive outside the door. They won't be getting in any time soon, but there's no way out either. You and ",["G>","ev",{"VAR?":"friend_name"},"out","/ev","G<",null],"^ hold each other tight. At least here, at the end of the world, you have each other.","\n","done",{"#f":3}],"await_rescue":["^The news isn't all bad. The human resistance has been striking back, and surviving military outposts have had success in driving the invaders off. As long as you can hold out a little longer, it seems like this nightmare may actually end. You and ",["G>","ev",{"VAR?":"friend_name"},"out","/ev","G<",null],"^ look around the small room. There are worse places to await rescue, and you have each other.","\n","done",{"#f":3}],"search_for_weapons":["done",{"#f":3}],"portcullis":["^<code><b>Lowering the Ekia Thwart portcullis</b></code>","\n","^<code>To close the Ekia Thwart portcullis, remove wooden block from wheel to unlock it. Carefully turn wheel anti-clockwise to close gate.</code>","\n","^<code>WARNING: Do not allow young childen to play on or near the portcullis, as they may be squashed and killed.</code>","\n","^<i>This room is a gateway to the main castle. There is one (1) portcullis here, a heavy iron gate then can be lowered to block the passage. There is one (1) wheel for raising or lowering the portcullis. There are several dead Ekia employees here, all bearing gruesome wounds.</i>","\n",["ev","str","^Lower portcullis","/str","/ev",{"*":".^.c","flg":20},{"c":["\n",{"->":"lower_portcullis"},"\n",{"#f":7}]}],["ev","str","^Loot the bodies","/str","/ev",{"*":".^.c","flg":20},{"c":["\n",{"->":"loot_the_bodies"},"\n",{"#f":7}]}],{"#f":3}],"lower_portcullis":["^<code><b>IMPORTANT: Once portcullis is in lowered position, it cannot be opened until mechanism is reset. See Ekia Raising Thwart portcullis for instructions.</b></code>","\n","^<i>You are in a room thoroughly sealed off from the outside, safe from the approaching horde for the moment.</i>","\n","^As the portcullis locks into place, you can hear the roar of your enemies approaching, then you hear your name. It is ",["G>","ev",{"VAR?":"friend_name"},"out","/ev","G<",null],"^, ",["G>","ev",{"VAR?":"friend_pronoun"},"out","/ev","G<",null],"^ made it after all! She rushes up to the closed portcullis, \"there you are! I\"m so glad to see you!\" She glances over her shoulder and you know they are close.","\n","^Panicked, you start looking around for some way to raise the portcullis, but you cannot find the instruction manual to unlock the gate.","\n",["G>","ev",{"VAR?":"friend_name"},"out","/ev","G<",null],"^ says, \"There's no time. Listen to me. You have to get get to the stairs. Go through that door, and go down. You should be able to find a way out of the castle near the river. Follow the river and you should be safe for awhile. Don't waste time, go now!\"","\n",["ev","str","^Follow her instructions","/str","/ev",{"*":".^.c","flg":20},{"c":["\n",{"->":"stairwell"},"\n",{"#f":7}]}],["ev","str","^Desperately try to raise portcullis","/str","/ev",{"*":".^.c","flg":20},{"c":["\n",{"->":"icky_ending"},"\n",{"#f":7}]}],{"#f":3}],"stairwell":["^<code><b>CAUTION: Stairs are slippery when wet.</b></code>","\n","^<code>No running, skateboarding, rollerblading, or walking with Ekia Polle stilts on stairs.</code>","\n","^<i>The stairs down to the dungeons were part of the original castle. The stairs up to the towere were added on later because prisoners found the dungeons too depressing while they awaited their torture and execution.</i>","\n",["G>","ev",{"VAR?":"friend_dead"},"/ev",[{"->":".^.b","c":true},{"b":["^Despite ",["G>","ev",{"VAR?":"friend_name"},"out","/ev","G<",null],"^'s encouragement, you are devastated to leave her. You can hear the creatures arrive at the portcullis behind you, and you hear her screams, mercifully cut short. You must escape or her death will have been in vain. ",{"->":".^.^.^.5"},null]}],"nop","G<",null],"\n",["G>","ev",{"VAR?":"friend_dead"},"!","/ev",[{"->":".^.b","c":true},{"b":["^Holding each other's hands tightly, you look up and down the stairs, knowing that your decision here is a matter of life and death. You can hear the bars of the portcullis behind you straining as the creatures stive to get through ",{"->":".^.^.^.6"},null]}],"nop","G<",null],"\n","^[Take spiral stairs up to tower] ",{"->":"tower"},"\n","^[Take straight stairs down to dungeons] ",{"->":"dungeons"},"\n",{"#f":3}],"tower":["^<code><b>Using the tower</b></code>","\n","^<code>Because prisoners are typically dealt with in a first-come, first-slain basis, tower cell blocks are arranged in circles around the tower's perimeter. There should be a red card in the door of the prisoner who has been held the longest, and a blue card in the door of the prisoner who is most recent. When removing a prisoner, be sure to move the red card one cell clockwise to the next prisoner's cell door. Likewise, when adding a new prisoner, put them in the empty cell clockwise of the blue card, and move the blue card to their cell door. If all cells on a floor are full, begin the same process on the next floor.</code>","\n","^<i>There are three (3) levels of cell before reachng the roof. All cells are currently unoccupied, but are equipped with Ekia Kuffs manacles chained to the walls. Both manacles and chains are of a flimsy-looking platic, but on inspection are surprisingly strong and durable.</i>","\n","^As you climb the stairs to the roof, you can hear the howl rise again, and they seem to be growing closer once more. They must have found another way into the castle. On reaching the roof, you realize there is no-where left to run, and you can hear them coming up the stairs.","\n","^[Raise your crossbow and make a last stand] ",{"->":"die_in_tower"},"\n","^[Jump from tower] ",{"->":"die_in_courtyard"},"\n",{"#f":3}],"die_in_tower":["^The jury-rigged crossbow is ineffectual against the creatures swarming up the stairs and they swiftly overwhelm you. Their jaws rip painfully into the muscles of your legs and arms as they pin you to the floor, then they rip into your abdomen. You scream in agony, unable to believe you are still alive while they are consuming you, and it seems to be an eternity before blackness finally closes in on you and you find the merciful release of death.","\n","done",{"#f":3}],"die_in_courtyard":["^The tower is high enough that your body bounces once on the hard flagstones of the courtyard below, but at least your death is quick.","\n","done",{"#f":3}],"dungeons":["^As you decend into the dungeons you see daylight streaming through a breach in the wall. Exploring further you see that it lets out into the river valley behind the castle. There is a path and as you hurry along you see people ahead, armed to defend against the invaders. You have escaped!","\n","done",{"#f":3}],"icky_ending":["^As you desperately fight to raise the portcullis, the creatures swarm in on the other side. You take ",["G>","ev",{"VAR?":"friend_name"},"out","/ev","G<",null],"^'s hand, until she is jerked away and you're helplessly forced to witness them devour her. Then they turn their attention to the gate and it's clear even these thick bars won't hold them indefinitely.","\n","^[Flee in terror] ",{"->":"die_in_kitchen"},"\n","^[Collapse in despair] ",{"->":"die_in_vain"},"\n",{"#f":3}],"die_in_vain":["^You curl into a ball on the floor, sobbing. The all you can see is the look in ",["G>","ev",{"VAR?":"friend_name"},"out","/ev","G<",null],"^ eyes as she died. It's useless to go on, and you don't want to live with what you've seen. You're dimly aware of the bars giving way, and you welcome the end as they close on you.","\n","done",{"#f":3}],"loot_the_bodies":["^You find an Ekia army knife, which could come in handy. As you pocket your find you hear footsteps behind you and your heart leaps. ",["G>","ev",{"VAR?":"friend_name"},"out","/ev","G<",null],"^ rushes through the open gate into your arms. Neither of you can believe your luck, but she pushes away and rushes to let the portcullis down. \"They're right behind me, we don't have time to waste,\" she says.","\n","^[Retreat to the nearby stairs] ",{"->":"stairwell"},"\n","done",{"#f":3}],"booby_trap":["done",{"#f":3}],"global decl":["ev","str","^Lexi","/str",{"VAR=":"friend_name"},"str","^she","/str",{"VAR=":"friend_pronoun"},0,{"VAR=":"friend_dead"},"/ev","end",null],"#f":3}],"listDefs":{}};