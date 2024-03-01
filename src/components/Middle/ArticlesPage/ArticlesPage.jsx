import "./articlesPage.css";

function ArticlesPage(props){
    return(
        <div id={props.articlesClicked===false?"none":"articlesPageParentDiv"}>
            <div id="psychologyParentDiv">
            <div id="psychologyDiv">
                <h4 id="psychologyTitle">Horse Psychology</h4>
            </div>
            <div id="articlesMenuDiv">
                <ul>
                    <li className="artMenuTxt"><a href="#abusedDiv">Abused Horses</a></li>
                    <li className="artMenuTxt"><a href="#startEndLightDiv">Starting and Ending Light</a></li>
                    <li className="artMenuTxt"><a href="#objectVsLocationDiv">Object VS Location Desensitization</a></li>
                    <li className="artMenuTxt"><a href="#wormParentDiv">Deworming Horses</a></li>
                    <li className="artMenuTxt"><a href="#trainersDiv">Horse Trainer Knowledge</a></li>
                    <li className="artMenuTxt"><a href="#ownerSenseDiv">Senseless Owners</a></li>
                </ul>
            </div>
            </div>
            <div id="abusedDiv">
                <div className="articleVidsDivs">
                    <iframe className="articleVideos" src="https://www.youtube.com/embed/Te-mYeYrmvI?si=bUV5Cx4wapapgUDv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="abuseTitleDivs">
                    <h4 className="abusedTitles">Training Abused Horses</h4>
                </div>
                <div className="abusedDescriptionDivs">
                    <p className="abusedDescriptions">I have found that abused horses only need to be re-taught two things. This article explains these two two ways of thinking that horses have to re-adapt. After these two lessons, all abused horses are ready to make progress in training.</p>
                </div>
                <div className="abuseTitleDivs">
                    <h4 className="abusedTitles">Lesson 1: Understand Pressure</h4>
                </div>
                <div className="abusedDescriptionDivs">
                    <p className="abusedDescriptions">Horses that have been abused are often used to people escalating pressure with no chance for the horse to try to find the release of pressure. For example, someone could be standing by their horse (let's say that pressure has a scale of 1-10) with a pressure of 0, and the horse pushes the person with their head. An abusive person adds pressure that is so intense and high with a pressure of 9 or 10 to get the horse to stop pushing them with their head. Horses don't know how to deal with this type of abusive communication because horses never jump from a 0 to a 10 with one another in their herds. They always increase their pressure through each number, to give the other horse a fair warning to start looking for the release of pressure. Horses increase pressure gradually with outward signs like: Swishing tail (1-2), pinning ears (3-4), biting (5-6), pushing with butt (7-8), single leg kicks (9), kicking with both rear legs (10). They never skip these steps, so they have an impossible time understanding humans that do skip steps.</p>
                </div>
                <div className="abusedDescriptionDivs">
                    <p className="abusedDescriptions">When training an abused horse, the first 3-4 days are to teach the horse that humans do use gradual amounts of pressure, and that we will give time for them to think through a problem and find the release of pressure. Some horses that have been abused either act out in defense when humans are not doing anything threatening, because the horse is scared that we are going to be irrational with our pressure. Some abused horses lock up and ignore the pressure that a human is giving them, because they know that if they move at all, they might get hurt from the owner. These problems are easily trained out of abused horses, and don't effect their training or life permanently.</p> 
                </div>
                <div className="abuseTitleDivs">
                    <h4 className="abusedTitles">Lesson 2: Relaxful mind</h4>
                </div>
                <div className="abusedDescriptionDivs">
                    <p className="abusedDescriptions">Horses that have been abused, haven't learned to be relaxed. They also haven't learned to think through pressure while being relaxed. Once a horse has learned to be relaxed while thinking through problems, it will no longer show the previously extreme reactions to being trained or taught. This relaxful mindset takes a lot of time to teach an abused horse. It takes somewhere between 4 weeks to 4 months depending on the amount of times the horse has been abused.</p>
                </div>
                <div className="topBtnParentDiv">
                    <div className="topBtnDiv" onClick={()=>window.scrollTo({
                        top:0,
                        left:0,
                        behavior:"instant"
                    })}>
                        <p>Article Menu</p>
                    </div>
                </div>
            </div>
            <div id="startEndLightDiv">
                <div className="articleVidsDivs">
                    <iframe className="articleVideos" src="https://www.youtube.com/embed/6XqWWRzQUgI?si=juMvznGD4L01z2VO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="abuseTitleDivs">
                    <h4 className="abusedTitles">Starting and Ending Light In Everything You Do</h4>
                </div>
                <div className="abusedDescriptionDivs">
                    <p className="abusedDescriptions">On the first day and last day of every week, I have a training session with my horses that has a very easy expectation and low stress level. The days in-between (Tuesday-Thursday) are days that I set expectations higher. Here's an example: I never pick up horses feet for the first time on a Monday or a Friday, because if horses have a stressful time, they will start to resent their decision to be around me. I will instead wait for a day between Tuesday-Thursday to do it for the first time.</p>
                </div>
                <div className="abusedDescriptionDivs">
                    <p className="abusedDescriptions">Another way I start and end light is by always spending 10-15 minutes at the beginning and end of every training session having my horses walk, and desensitizing my horses. Another way I start and end light, is I always ask with the lightest possible pressure when teaching horses an exercise and increase the pressure until my horses are motivated to look for the release of pressure. Once my horses are motivated to look for the release of pressure, I lower my pressure back to as light as possible as long as they keep staying motivated to find the release.</p>
                </div>
                <div className="abusedDescriptionDivs">
                    <p className="abusedDescriptions">Horses ruminate on things. We all know the famous saying, "Horses learn from the release of pressure.". Whatever the last thing they were thinking about when you put them away, is going to be thought about constantly until you catch them again. You can use this to your advantage if you control the last thing your horses are thinking about whenever you put them back in their stall. This is very impactful on their training. If you think that the only time horses are learning is while they're in the arena, under the saddle, or tied up, you're wrong. Horses that are put away, thinking about being relaxed and respectful will want to be caught whenever you catch them next. Horses that are put away thinking that they don't want to be submissive, will be more difficult to catch the next time. Starting and ending light is the key to having your horse enjoy the learning process.</p>
                </div>
                <div className="abusedDescriptionDivs">
                    <p className="abusedDescriptions">Having a horse that is relaxed and enjoying it's job and learning process brings better results than what you would get if you had intense training sessions on Mondays and Fridays. If you are working horses every day, during the last 30 minutes actively be with your horse (sitting next to it, brushing it, letting it eat, etc.) anything that keeps their attention relatively on you, but is enjoyable for them. Then when you put them away for the night, they will have more stress free experiences to ruminate on, rather than the hard work. This will allow the horse to enjoy being caught continually. If you don't do this you will find that a daily work schedule starts to make them resent being with you. If you only work and train your horses once a week, you will also need to do the 30 minutes of relaxing but attentive time (mentioned above) at the end of every session to keep horses wanting to be with you.</p>
                </div>
                <div className="topBtnParentDiv">
                    <div className="topBtnDiv" onClick={()=>window.scrollTo({
                        top:0,
                        left:0,
                        behavior:"instant"
                    })}>
                        <p>Article Menu</p>
                    </div>
                </div>
            </div>
            <div id="objectVsLocationDiv">
                <div className="articleVidsDivs">
                    <iframe className="articleVideos" src="https://www.youtube.com/embed/E43FVOYiS-A?si=g-2MUUA-iZhcb6vp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="textContentDivs">
                    <div className="sectionTitlesDiv">
                        <h4>Object Desensitization vs. Location Desensitization</h4>
                    </div>
                    <div className="sectionInfoDivParent">
                        <div className="sectionInfoDiv">
                            <p>Which gets a quieter and relaxed horse quicker, desensitizing to objects or locations?</p>
                            <p>Desensitizing a horse to a variety of objects is limited to the objects that are in your possession while with the horse. Location desensitization gets horses quieter because not only does it make them relax with a new location, they also have to relax to the random and ever-changing objects that are in the location. This is why trail rides are so effective for getting horses calm in all sorts of situations. When on the trail, you get a horse desensitized to locations and objects, while the alternative only trains them to be comfortable with objects.</p>
                            <p>Horses might be comfortable with a plastic bag in their stall, but then when they see a plastic bag on the sidewalk they are apprehensive about it again. This is because horses don't assume that because one plastic bag was safe, that all plastic bags will be safe. They will be apprehensive to a familiar object, if the location of it is new. Desensitizing horses to objects can prove to be a waste of time, if they aren't also being desensitized to locations just as much.</p>
                        </div>
                    </div>
                    <div className="sectionInfoDivParent">
                        <div className="sectionInfoDiv">
                            <div className="sectionTitlesDiv">
                                <h4>Teaching Horses To Think About Scary Objects</h4>
                            </div>
                            <div className="sectionInfoDiv">
                                <p>Many horses don't know how to think about if something should be scary or if it is safe. Most horses just assume that the object isn't safe, if they haven't had high amounts of safe exposure to that type of object. This is why it is important that horses don't experience high amounts of stress and pressure every time they are getting trained. A good trainer will only stress and pressure their horse about once every two weeks. This will reaffirm the horse's emotions to stay stable and not escalate at every new form of pressure. This also fosters an environment where horses enjoy being and are relaxed during the learning process. If a person is pushing a horse to do high levels of performance every day, then that horse isn't going to like being around that person. My horses learn to think about new experiences instead of reacting. There is a clear difference between my horse and one that was started by another trainer, because mine won't spook or over react to a scary dog, rope being thrown, car driving by, or crossing a scary bridge. This is because my horses have learned to think about things instead of just react.</p>
                            </div>
                        </div>
                    </div>
                        <div className="topBtnParentDiv">
                            <div className="topBtnDiv" onClick={()=>window.scrollTo({
                                top:0,
                                left:0,
                                behavior:"instant"
                            })}>
                            <p>Article Menu</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="wormParentDiv">
                <div className="articleVidsDivs">
                    <iframe className="articleVideos" src="https://www.youtube.com/embed/4XlxVX82ml8?si=YTuJgT2ypTF2NHT_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="textContentDivs">
                    <div className="sectionTitlesDiv">
                        <h4>5 Steps For Giving De-Wormer To Horses</h4>
                    </div>
                    <div className="sectionInfoDivParent">
                        <div className="sectionInfoDiv">
                            <p>I have found that most people's horses resist taking de-wormer because they usually force the horse to take it. The steps below work for any horse (even resistant horses). Repeat each step (not moving onto the next one) until the horse does it relaxed and thinking, instead of reacting:</p>
                            <p><b>1.</b> Approach and retreat placing your finger on the lips of your horse's mouth near their interdental gap.</p>
                            <p><b>2.</b> Approach and retreat placing your finger inside your horse's mouth at the interdental gap, touching the tongue.</p>
                            <p>Now we're repeating the steps above, but with the syringe instead of your finger.</p>
                            <p><b>3.</b> With de-wormer in hand (keep cap on the syringe), approach and retreat placing the syringe on the lips of your horse's mouth near their interdental gap.</p>
                            <p><b>4.</b> With de-wormer in hand (keep cap on the syringe), approach and retreat placing the syringe inside your horse's mouth at the interdental gap, touching the tongue.</p>
                            <p><b>5.</b> Remove cap from de-wormer syringe and slide it into the horse's interdental gap. Quickly squeeze desired de-wormer paste into the horse's mouth.</p>
                        </div>
                    </div>
                    <div className="topBtnParentDiv">
                        <div className="topBtnDiv" onClick={()=>window.scrollTo({
                            top:0,
                            left:0,
                            behavior:"instant"
                        })}>
                            <p>Article Menu</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="trainersDiv">
                <div className="articleVidsDivs">
                    <iframe className="articleVideos" src="https://www.youtube.com/embed/l0nalkeblL4?si=CtWsML-lofvWm1Hj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="abuseTitleDivs">
                    <h4 className="abusedTitles">Something Every Horse Trainer Needs</h4>
                </div>
                <div className="abusedDescriptionDivs">
                    <p className="abusedDescriptions">Every horse trainer needs to have mastered at least one exercise that they know how to teach any type of horse, no matter what kind of reaction the horse gives.</p>
                </div>
                <div className="abusedDescriptionDivs">
                    <p className="abusedDescriptions">Any horse can be trained, and any exercise can be taught. The trainer just needs to have mastered the exercise if they want to be able to teach it to every horse.</p>
                </div>
                <div className="abusedDescriptionDivs">
                    <p className="abusedDescriptions">It is important for the first exercise that you teach a colt, to be done to the very best of the horse's ability. For example, if you teach it to round pen as your first exercise, you should be able to get that horse to do everything that a horse you've owned for two years can do. If you grade your horse's performance with the standard A, B, C, D, F grading system, you want your first exercise to be done to an A efficiency. Most colt starters don't do this, because they know that if the horse just understands the concept (lets say its a B) then they will be safe to move to the next exercise. This is true for most exercises, but it is a mistake to make with the first exercise taught. The first exercise is a time to set all clear boundaries with a horse, and to see if it can mentally and physically work hard. If the horse can't do an A amount of work mentally or physically, then it would be important to inform the owner sooner rather than later.</p>
                </div>
                <div className="topBtnParentDiv">
                    <div className="topBtnDiv" onClick={()=>window.scrollTo({
                        top:0,
                        left:0,
                        behavior:"instant"
                    })}>
                        <p>Article Menu</p>
                    </div>
                </div>
            </div>
            <div id="ownerSenseDiv">
                <div className="articleVidsDivs">
                    <iframe className="articleVideos" src="https://www.youtube.com/embed/CGiNmpYWCU0?si=VOSYsJFSvNrugAej" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="abuseTitleDivs">
                    <h4 className="abusedTitles">Senseless Horse Owners</h4>
                </div>
                
                <div className="abusedDescriptionDivs">
                    <p className="abusedDescriptions"> Colt starters are professionals at determining if a horse is trained. Owners shouldn't pressure colt starters to go faster or skip steps of training if the trainer determines them as necessary. Rushing horse trainers is asking them to ignore the behavior they are reading in the horse, and that's the whole reason they're the trainer. Below is my response to all the unuseful comments people make about their horse.</p>
                </div>
                <ul id="ownerQuotes">
                    <li className="abusedDescriptions">"He's already got 20 rides"</li>
                    <li className="abusedDescriptions">"She's got a sweet deminour"</li>
                    <li className="abusedDescriptions">"Once you get the saddle on, he's got a great mind."</li>
                    <li className="abusedDescriptions">"I just want him to be rode on the trails"</li>
                    <li className="abusedDescriptions">"She's got a sweet disposition once the saddle's on."</li>
                </ul>
                <div className="abusedDescriptionDivs">
                    <p className="abusedDescriptions">My response to all of these is: "Thanks for letting me know, but I'm still going to do things at my own pace."</p>
                </div>
                <div className="topBtnParentDiv">
                    <div className="topBtnDiv" onClick={()=>window.scrollTo({
                        top:0,
                        left:0,
                        behavior:"instant"
                    })}>
                        <p>Article Menu</p>
                    </div>
                </div>
            </div>
            <div id="horseMemoryDiv">
                <div className="articleVidsDivs">
                    <iframe className="articleVideos" src="https://www.youtube.com/embed/f9A9o_-lLSc?si=7ZofXnAVQk7-8MG3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="abuseTitleDivs">
                    <h4 className="abusedTitles">Horse Memory</h4>
                </div>
                <div className="abusedDescriptionDivs">
                    <p className="abusedDescriptions">Lots of people want horses to remember lessons taught for the rest of their life. The ability they have to forget information actually shows their intelligence for choosing what knowledge is important and what isn't. Understanding their memory patterns explained below will improve their learning process as you train them. When training horses, you want to use both muscle memory and mental memory. Every behavior from a horse comes from either a muscle or mental reaction.</p>
                </div>
                <div className="abuseTitleDivs">
                    <h4 className="abusedTitles">Horse Muscle Memory</h4>
                </div>
                <div className="abusedDescriptionDivs">
                    <p className="abusedDescriptions">Muscle memory is more important than mental memory.If you don't have the muscle memory then you can't teach the horse other things. We actually see this with humans too. As a baby horse and human baby develop physically, it is only as they start to physically move in more ways, like as a human learns to roll around, then it learns to crawl, then learns to walk. As a human masters it's physical memory, it is then able to expand it's mental memory. You can see this same thing with horse development.</p>
                </div>
                <div className="abusedDescriptionDivs">
                    <p className="abusedDescriptions">Muscle memory is the most necessary because when you give a release to a horse by releasing pressure, that's a muscle related thing. The trainer looks for a muscle related behavior in the horse, and when the horse does the behavior that's wanted with their muscles, they release the pressure. This isn't always the case, but it's 90% of time. There are some exceptions for horse trainers that specilize on mental training in horses, but it is very rare to find such trainers. Most horse trainers don't even know how to put this into words, so they don't intentionally focus on these differences like I do. For example: If you want a horse to pick up their feet when you bring your hand down it's leg, then you're going to release the pressure when the horse brings it's foot up and is standing still. You're not going to release the pressure when the horse is thinking of lifting it's leg up. It's really complicated, and you can focus on what the horse is thinking. Some people do give a release of pressure when the horse is thinking about the correct action, even when the horse isn't physically doing it. It just takes professional awareness of the horse's acute behavior manifestations to correctly know what horses are thinking. Most of the time, even when a professional is trying to release the pressure when the horse is thinking correctly, the trainer (myself included) will be wrong 50% of the time. When you're getting paid to get a horse trained, you need to get the horse trained focusing on muscle memory, because you don't have the time to be wrong half of the time. With my own horses, I like to focus on giving the release if the horse is thinking correctly, regardless of it's muscle behavior, because it does make a better difference. It make a horse lighter. After all, you train a horse to train their mind in the long run, so if you can get there from the beginning, it is much more bennefitial.</p>
                </div>
                <div className="abusedDescriptionDivs">
                    <p className="abusedDescriptions">The release of pressure is always muscular. Whatever the horse is physically doing that's correct, that's typically when the trainer releases the pressure, so that's what the horse is going to remember and excell at. It's through muscle memory that horses are able to connect different trained behaviors. For example: When I'm riding a horse and I want to teach the horse to stay in the trot, be responsible for it's feet, and stay in the gait without me nagging it. So, when I'm trotting the horse around and it's muscles are trotting consistently and with rythem and I think the muscles have got part of the memory in them, I'm going to give the release. Then if you sit there, the horse has the release and your sitting still. The horse will lower it's head and it'll get comfortable, doze off, get curious about something and investigate. You're still in the release part. Horses are just like people when relaxed. Every once in a while they'll look up and ask if it's still relax time, like are we still sleeping here with the release. Then they'll go back to being completely relaxed. The cool thing, is that every time a horse wakes up a little and sees if we're still relaxing, it puts its body in the same position as when I initially released the pressure. The ears, head position, face position, etc. This shows that when a horse goes in and out of being in a relaxed state to a bored state the horse physically remembers and mentally remembers what the release was for. It's good to let a horse remember what the release was for as many times as you can before getting out of the release and doing the next exercise. If a horse keeps going in and out of it's relaxation to boredom, it will eventually forget what the release of pressure came from. They usually can go back and forth from boredom to relaxation about four times before they forget what gave the release of pressure. Another example of this is when a horse is in a pasture. If you observe when a horse goes between these relaxed and bored states, or sleepy and bored states you will see the following. For example: If a horse is eating in the pasture, it will get bored and fall asleep. When the horse wakes up, what does it do? It puts it's head back in the position to eat even though it doesn't want to eat. It puts it's head back in the position it was when it got the release of pressure. The same thing is seen when a foal is board while nurssing from it's mother. When a foal is nurssing and gets board, when it wakes up it will physically go back to the position of nursing even though the foal doesn't want to nurse and doesn't have control of this body movement. This is to help horses remember where they get their food and remember what they were doing before they were comfortable. You see the same thing when a horse is scratching another horse's whithers or standing with it's head by another horse's tail.</p>
                </div>
                <div className="abusedDescriptionDivs">
                    <p className="abusedDescriptions">Most people don't think that horses can sit there and think about something. This is partly because people don't take the time to let a horse think about something, and they don't observe horses for long periods of time in pastures or in the wild in the relaxed state. Another reason why muscle memory is more important than mental memory is because you train a horse in these steps (as Clinton Anderson's Downunder Horsemanship method teaches) 1. Create movement 2. Redirect movement 3. Inhibit movement. Clinton is speaking so much truth with this.</p>
                </div>
                <div className="abuseTitleDivs">
                    <h4 className="abusedTitles">Horse Mental Memory</h4>
                </div>
                <div className="abusedDescriptionDivs">
                    <p className="abusedDescriptions">As long as a horse has good physical capability, it can learn good mental capability. Here are some examples of mental things you can teach a horse: Respectful thoughts, who's alpha, responsible for gait, think through pressure, and be relaxed during pressure. All of these things that a horse has to learn to think about. You can teach all mental lessons with any physical training lesson, you can do it in the saddle, lunge line, round-pen, etc. It doesn't matter what the physical lesson is as long as the trainer has mastered the exercise enough to teach that mental lesson. Trainers and professionals have more fun focusing on what a horse is thinking, but clent's need results faster than that approach. Mental memory gives long lasting power, because if a horse has good thought processes, then it can be exposed to new muscular activities and it will still apply it's mental memory. Where if a horse has only been taught to do things with it's body, it will only have it's body to solve the new problems it encounters.</p>
                </div>
                <div className="topBtnParentDiv">
                    <div className="topBtnDiv" onClick={()=>window.scrollTo({
                        top:0,
                        left:0,
                        behavior:"instant"
                    })}>
                        <p>Article Menu</p>
                    </div>
                </div>
            </div>
            <div id="articleIdeasDiv">
                <div className="sectionTitlesDiv">
                    <h4>Ask Stephen Horse Training Questions!</h4>
                </div>
                <div id="articleIdeasDiv2">
                    <div className="sectionInfoDiv">
                        <h4>Was there something Stephen did that you want more explanation on? Would you like to hear Stephen's knowledge on a horse training topic? Do you have any tips or feedback to add for the articles on this page?</h4>
                        <h4>Email us at choicecoltstarting@gmail.com, and we'll make an exhaustive article for you about your questions, tips, and feedback!</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};
export {ArticlesPage};