import Head from 'next/head'

export default function BrowseCourses(){
    return(
        <>
        <Head>
            <title>Style Under Stress Assessment | Crucial Learning</title>
            <meta name="description" content="Discover how well you handle Crucial Conversations and identify where you can improve with the Style Under Stress™ assessment."/> 
        </Head>
        
        <section className='assesmentbannnerbg'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <h2>WHAT’S YOUR STYLE UNDER STRESS?</h2>
                        <h3>Stressed? Who, me? Never</h3>
                        <p>When stakes are high, emotions run strong, and opinions differ, we all struggle to stay cool. We often either clam up and hope the conflict will go away, or we blow up and damage trust and respect. Take the assessment and find out how well you communicate when it matters most.</p>
                    </div>
                    <div className='col-md-6'>
                        <div className='assesmentimgbanner'>
                            <img src="/classets/img/style-under-stress-assessment.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='assesmentpart2'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <div>
                            <h2>ASSESSMENT</h2>
                            <h5>INSTRUCTION</h5>

                            <h5>Identify a Relationship</h5>
                            <p>Before you begin, think of a relationship you want to explore—with your boss, coworker, direct report, partner, or family member.</p>
                            <h5>Identify a Circumstance</h5>
                            <p>Next, think of a tough disagreement you've had or continue to have—one where you feel frustrated or irritated or that doesn't get resolved to your satisfaction.</p>
                            <h5>Apply</h5>
                            <p>With the relationship and disagreement in mind, respond to the following statements.</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <form>
                        <div className='formsbarassesment'>                            
                        
                            <ol>
                            <li>Rather than tell people exactly what I think, sometimes I rely on jokes, sarcasm, or snide remarks to let them know I'm frustrated.</li>
                            <div>
                                <span><input type="radio" name="1" id="1t" value="true" required="required" tabindex="1"/><label for="1t">True</label></span>
                                <span><input type="radio" name="1" id="1f" value="false" tabindex="2"/><label for="1f">False</label></span>
                            </div>
                            <li>When I've got something tough to bring up, I understate it rather than share my full opinion.</li>
                            <div>
                                <span><input type="radio" name="2" id="2t" value="true" required="required" tabindex="3"/><label for="2t">True</label></span>
                                <span><input type="radio" name="2" id="2f" value="false" tabindex="4"/><label for="2f">False</label></span>
                            </div>
                            <li>Sometimes when people bring up a touchy issue, I try to change the subject.</li>
                            <div>
                                <span><input type="radio" name="3" id="3t" value="true" required="required" tabindex="5"/><label for="3t">True</label></span>
                                <span><input type="radio" name="3" id="3f" value="false" tabindex="6"/><label for="3f">False</label></span>
                            </div>
                            <li>When it comes to dealing with difficult subjects, sometimes I steer the conversation to safer issues rather than address what really concerns me.</li>
                            <div>
                                <span><input type="radio" name="4" id="4t" value="true" required="required" tabindex="7"/><label for="4t">True</label></span>
                                <span><input type="radio" name="4" id="4f" value="false" tabindex="8"/><label for="4f">False</label></span>
                            </div>
                            <li>At times I avoid situations that might bring me into contact with people I'm having problems with.</li>
                            <div>
                                <span><input type="radio" name="5" id="5t" value="true" required="required" tabindex="9"/><label for="5t">True</label></span>
                                <span><input type="radio" name="5" id="5f" value="false" tabindex="10"/><label for="5f">False</label></span>
                            </div>
                            <li>I put off getting back to people sometimes because I'm uncomfortable dealing with them.</li>
                            <div>
                                <span><input type="radio" name="6" id="6t" value="true" required="required" tabindex="11"/><label for="6t">True</label></span>
                                <span><input type="radio" name="6" id="6f" value="false" tabindex="12"/><label for="6f">False</label></span>
                            </div>
                            <li>In order to get my point across, I sometimes exaggerate my side of the argument.</li>
                            <div>
                                <span><input type="radio" name="7" id="7t" value="true" required="required" tabindex="13"/><label for="7t">True</label></span>
                                <span><input type="radio" name="7" id="7f" value="false" tabindex="14"/><label for="7f">False</label></span>
                            </div>
                            <li>If I seem to be losing control of a conversation, I sometimes cut people off or change the subject to something that works better for me.</li>
                            <div>
                                <span><input type="radio" name="8" id="8t" value="true" required="required" tabindex="15"/><label for="8t">True</label></span>
                                <span><input type="radio" name="8" id="8f" value="false" tabindex="16"/><label for="8f">False</label></span>
                            </div>
                            <li>I suspect others walk away from conversations with me at times feeling belittled or hurt. </li>
                            <div>
                                <span><input type="radio" name="9" id="9t" value="true" required="required" tabindex="17"/><label for="9t">True</label></span>
                                <span><input type="radio" name="9" id="9f" value="false" tabindex="18"/><label for="9f">False</label></span>
                            </div>
                            <li>When I'm stunned by a comment, sometimes I say things that others might take as forceful or attacking—comments such as "Give me a break!" or "That's ridiculous!"</li>
                            <div>
                                <span><input type="radio" name="10" id="10t" value="true" required="required" tabindex="19"/><label for="10t">True</label></span>
                                <span><input type="radio" name="10" id="10f" value="false" tabindex="20"/><label for="10f">False</label></span>
                            </div>
                            <li>Sometimes when things get heated, I move from arguing against others' points to saying things that might hurt them personally.</li>
                            <div>
                                <span><input type="radio" name="11" id="11t" value="true" required="required" tabindex="21"/><label for="11t">True</label></span>
                                <span><input type="radio" name="11" id="11f" value="false" tabindex="22"/><label for="11f">False</label></span>
                            </div>
                            <li>When I feel threatened or hurt I sometimes behave in ways that appear spiteful or vengeful.</li>
                            <div>
                                <span><input type="radio" name="12" id="12t" value="true" required="required" tabindex="23"/><label for="12t">True</label></span>
                                <span><input type="radio" name="12" id="12f" value="false" tabindex="24"/><label for="12f">False</label></span>
                            </div>
                            <li>I sometimes find myself having the same conversation with the same person multiple times.</li>
                            <div>
                                <span><input type="radio" name="13" id="13t" value="true" required="required" tabindex="25"/><label for="13t">True</label></span>
                                <span><input type="radio" name="13" id="13f" value="false" tabindex="26"/><label for="13f">False</label></span>
                            </div>
                            <li>At times I walk away from conversations with an agreement that I don't think really solves the problem.</li>
                            <div>
                                <span><input type="radio" name="14" id="14t" value="true" required="required" tabindex="27"/><label for="14t">True</label></span>
                                <span><input type="radio" name="14" id="14f" value="false" tabindex="28"/><label for="14f">False</label></span>
                            </div>
                            <li>When I'm discussing an important topic with others, sometimes I move from trying to make my point to trying to win the battle.</li>
                            <div>
                                <span><input type="radio" name="15" id="15t" value="true" required="required" tabindex="29"/><label for="15t">True</label></span>
                                <span><input type="radio" name="15" id="15f" value="false" tabindex="30"/><label for="15f">False</label></span>
                            </div>
                            <li>Sometimes I decide that it's better to keep the peace than share my views.</li>
                            <div>
                                <span><input type="radio" name="16" id="16t" value="true" required="required" tabindex="31"/><label for="16t">True</label></span>
                                <span><input type="radio" name="16" id="16f" value="false" tabindex="32"/><label for="16f">False</label></span>
                            </div>
                            <li>When talking about sensitive subjects, my emotions often get the best of me.</li>
                            <div>
                                <span><input type="radio" name="17" id="17t" value="true" required="required" tabindex="33"/><label for="17t">True</label></span>
                                <span><input type="radio" name="17" id="17f" value="false" tabindex="34"/><label for="17f">False</label></span>
                            </div>
                            <li>I sometimes walk away from conversations rehashing the reasons I'm right and others are wrong.</li>
                            <div>
                                <span><input type="radio" name="18" id="18t" value="true" required="required" tabindex="35"/><label for="18t">True</label></span>
                                <span><input type="radio" name="18" id="18f" value="false" tabindex="36"/><label for="18f">False</label></span>
                            </div>
                            <li>In the middle of a tough conversation, I often get so caught up in arguments that I don't see how I'm coming across to others.</li>
                            <div>
                                <span><input type="radio" name="19" id="19t" value="true" required="required" tabindex="37"/><label for="19t">True</label></span>
                                <span><input type="radio" name="19" id="19f" value="false" tabindex="38"/><label for="19f">False</label></span>
                            </div>
                            <li>When conversations start to deteriorate, I find it hard to figure out what's going wrong and get it back on track.</li>
                            <div>
                                <span><input type="radio" name="20" id="20t" value="true" required="required" tabindex="39"/><label for="20t">True</label></span>
                                <span><input type="radio" name="20" id="20f" value="false" tabindex="40"/><label for="20f">False</label></span>
                            </div>
                            <li>When I finally say what I really think, I tend to do so in a way that makes others feel defensive.</li>
                            <div>
                                <span><input type="radio" name="21" id="21t" value="true" required="required" tabindex="41"/><label for="21t">True</label></span>
                                <span><input type="radio" name="21" id="21f" value="false" tabindex="42"/><label for="21f">False</label></span>
                            </div>
                            <li>I often struggle to decide whether it's more important to say what I think or preserve the relationship.</li>
                            <div>
                                <span><input type="radio" name="22" id="22t" value="true" required="required" tabindex="43"/><label for="22t">True</label></span>
                                <span><input type="radio" name="22" id="22f" value="false" tabindex="44"/><label for="22f">False</label></span>
                            </div>
                            <li>Sometimes when I feel strongly about something, I say it in a way that others tend to resist.</li>
                            <div>
                                <span><input type="radio" name="23" id="23t" value="true" required="required" tabindex="45"/><label for="23t">True</label></span>
                                <span><input type="radio" name="23" id="23f" value="false" tabindex="46"/><label for="23f">False</label></span>
                            </div>
                            <li>When I am very confident of my opinion, I don't like it when others push back.</li>
                            <div>
                                <span><input type="radio" name="24" id="24t" value="true" required="required" tabindex="47"/><label for="24t">True</label></span>
                                <span><input type="radio" name="24" id="24f" value="false" tabindex="48"/><label for="24f">False</label></span>
                            </div>
                            <li>I'm often unsure of how to help others open up about things they are reluctant to share.</li>
                            <div>
                                <span><input type="radio" name="25" id="25t" value="true" required="required" tabindex="49"/><label for="25t">True</label></span>
                                <span><input type="radio" name="25" id="25f" value="false" tabindex="50"/><label for="25f">False</label></span>
                            </div>
                            <li>I spend more of my energy thinking about how to get my point across than worrying about how to help others express theirs.</li>
                            <div>
                                <span><input type="radio" name="26" id="26t" value="true" required="required" tabindex="51"/><label for="26t">True</label></span>
                                <span><input type="radio" name="26" id="26f" value="false" tabindex="52"/><label for="26f">False</label></span>
                            </div>
                            <li>I spend lots of time feeling very anxious when I'm facing a conversation where I think I might get tough feedback.</li>
                            <div>
                                <span><input type="radio" name="27" id="27t" value="true" required="required" tabindex="53"/><label for="27t">True</label></span>
                                <span><input type="radio" name="27" id="27f" value="false" tabindex="54"/><label for="27f">False</label></span>
                            </div>
                            <li>I can feel hurt and angry for a long time after a conversation where others said hurtful things to me.</li>
                            <div>
                                <span><input type="radio" name="28" id="28t" value="true" required="required" tabindex="55"/><label for="28t">True</label></span>
                                <span><input type="radio" name="28" id="28f" value="false" tabindex="56"/><label for="28f">False</label></span>
                            </div>
                            <li>I often have problems with people failing to do what we agreed to, and then the burden is on me to bring it up again.</li>
                            <div>
                                <span><input type="radio" name="29" id="29t" value="true" required="required" tabindex="57"/><label for="29t">True</label></span>
                                <span><input type="radio" name="29" id="29f" value="false" tabindex="58"/><label for="29f">False</label></span>
                            </div>
                            <li>When resolving tough things, we sometimes have clashing expectations about how the decision will be made, or even about what we agreed to when we talked.</li>
                            <div>
                                <span><input type="radio" name="30" id="30t" value="true" required="required" tabindex="59"/><label for="30t">True</label></span>
                                <span><input type="radio" name="30" id="30f" value="false" tabindex="60"/><label for="30f">False</label></span>
                            </div>
                            </ol>
                        </div>
                        <input type="submit" value="Submit" class="assesmetmain" tabindex="201"/></form>
                    </div>
                </div>
            </div>
        </section>

        

        </>
    )
}