import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { LuSquareArrowUp } from 'react-icons/lu';

const MentionsLégales = () => {


  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className='max-w-7xl mx-auto p-4 sm:p-6'>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase" id='title' >Mentions Légales</h2>
      <div className="bg-mbg-white-details rounded-lg p-6 imgbxsh" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, velit nesciunt perspiciatis quam repellendus, eius soluta numquam placeat accusamus repudiandae earum possimus cumque beatae doloremque nostrum voluptatibus vero pariatur quidem!
        Pariatur, modi laboriosam tempora obcaecati tempore dolore, quisquam ipsa autem quo magni facilis provident culpa nesciunt placeat iusto cupiditate temporibus quam rem dolorum! Omnis fugiat similique explicabo numquam distinctio. Veritatis.
        Placeat laboriosam ducimus sunt, inventore ratione ea libero voluptatum quo. Voluptatibus neque tempora rerum, eligendi saepe aut odit explicabo quam modi quaerat quisquam vitae sunt blanditiis obcaecati ab ex adipisci!
        Fugiat earum optio vel accusantium. Natus voluptatem architecto consequuntur quae dolore vero eligendi officia excepturi placeat assumenda, sequi alias aperiam voluptatibus velit distinctio porro explicabo maiores ea culpa impedit earum.
        Quo rem adipisci exercitationem molestias iste, praesentium consequatur. Quaerat, pariatur? Temporibus fugit commodi a tempora repudiandae aut voluptate distinctio rerum eos iure voluptas voluptates tenetur delectus ut, fugiat voluptatibus cupiditate?
        Veritatis ad in, sint facilis dolores, distinctio rem quia, quam voluptatibus illo laboriosam. Commodi dolorem quisquam culpa dignissimos assumenda esse unde delectus eveniet, nihil molestias facere placeat dicta illo voluptate!
        Suscipit voluptatum culpa modi obcaecati laudantium dicta iure amet vero hic tenetur sunt, saepe aut natus eius minima ad itaque. Vitae, id nulla. Totam quidem illo voluptas mollitia, porro voluptatum?
        Cumque earum dolorum enim a corporis eaque libero repudiandae excepturi recusandae autem neque consectetur iusto ullam distinctio, velit rerum quos, fugit et consequatur voluptatibus vel fugiat? Nobis soluta nihil labore!
        Optio porro, qui culpa deserunt iure cum ab consectetur eaque nihil quae magni fugiat expedita aut dignissimos exercitationem deleniti eum commodi repudiandae ratione rem quos temporibus! Quidem sed provident odio?
        Voluptatum distinctio dolorum quod dicta adipisci? Nostrum et exercitationem, reprehenderit ex, ullam quo voluptatem doloribus consequatur natus eligendi, omnis tempora accusantium saepe eos sequi explicabo quod. Saepe veniam molestiae doloremque.
        In voluptatibus veritatis dolor dolore tenetur vitae repudiandae voluptate totam, ab magni fuga quos perspiciatis architecto deleniti, laboriosam temporibus numquam, accusamus aperiam asperiores eum incidunt rem? Iste quis qui id.
        Rerum quos, possimus voluptas saepe fugit eius numquam alias similique, odio id at est ducimus eveniet odit ad nam dignissimos dolorum minus amet eligendi? Doloribus, deserunt. Necessitatibus ex quas laborum?
        Earum consectetur cumque hic ipsa, animi delectus corrupti. Quam natus nisi commodi minima! Amet corrupti sed architecto nam explicabo voluptatibus impedit earum, sapiente numquam dolores accusamus non, nobis libero voluptatem.
        Architecto voluptate eos aliquid saepe adipisci necessitatibus iure optio ipsum voluptatum iste! Quae est consectetur sit vero sapiente, assumenda, deleniti enim id incidunt perspiciatis ut repellendus. Placeat voluptatem est aperiam!
        Qui quidem ab dolores quo, cum aliquam doloremque recusandae rem, unde quaerat voluptas dicta! At nostrum praesentium asperiores voluptates officia voluptate sapiente, architecto quasi illo perferendis mollitia ratione dolorum explicabo?
        Labore itaque dolorum a placeat praesentium porro ea quaerat nam voluptatem illum mollitia, iure esse saepe neque incidunt quis numquam omnis expedita repellat cupiditate aut eveniet enim. Quisquam, ipsam excepturi!
        Porro vitae veniam, adipisci fugiat vero itaque sapiente aspernatur quas. Consequatur, earum, est aliquid libero rerum consequuntur cupiditate, minus magni ipsa minima sunt? Unde quod beatae, eos similique dolorum esse?
        Nulla est aliquam aperiam, blanditiis inventore commodi? Fugit dignissimos quas ex voluptatibus. Dicta animi, cupiditate dolor maiores minus impedit nostrum ullam aliquid ad dignissimos commodi aspernatur hic culpa itaque. Vero!
        Molestiae hic reprehenderit, maxime doloribus aut veritatis iste, deserunt nostrum aspernatur dolorem consequatur amet fuga nesciunt delectus quos adipisci aliquid error dolor unde? Autem, quae vel adipisci sint qui eaque.
        Hic cum doloremque temporibus? Distinctio atque praesentium perspiciatis laborum fugit vitae eveniet iste quidem eum natus deserunt similique unde est, consequuntur perferendis et sapiente facere! Magnam pariatur omnis explicabo harum.
        Cupiditate laboriosam provident veniam beatae corrupti fugiat sit perspiciatis quidem deleniti sapiente fuga sint fugit, ratione earum eos assumenda voluptatum reiciendis odit totam quis rerum. Vero ipsa delectus aut harum!
        Cupiditate pariatur facere maiores beatae neque possimus assumenda nesciunt ad provident, eligendi iure doloribus, illo consequatur a autem ipsa error fugit corporis libero tempore delectus. Nemo eligendi quasi quam labore.
        Incidunt blanditiis ut quaerat quas, vero amet optio eveniet deleniti pariatur eum. Exercitationem ipsum aut nesciunt inventore incidunt quia laudantium provident! Voluptas debitis non a qui facilis placeat? Officia, dignissimos.
        Corrupti qui veritatis autem quisquam libero iste repellat in assumenda ipsa et itaque praesentium tenetur atque enim vel magnam, laborum dolores deserunt illo modi optio. Voluptatem natus unde provident quisquam?
        Similique, unde iure! Obcaecati eveniet id, cupiditate repellendus qui, praesentium ipsa eligendi amet excepturi voluptatibus aliquam soluta earum architecto iste debitis blanditiis enim fuga incidunt expedita. Unde soluta sunt dignissimos.
        Expedita impedit quia praesentium dolores ad odio veniam, eum, facere eius illo doloribus ducimus repudiandae ipsa quibusdam facilis fugit aspernatur aperiam! Ea veniam ratione nisi rem, enim et voluptate iste.
        Consectetur dolorem eius ipsum et provident maiores sapiente aliquid assumenda numquam deserunt veritatis adipisci possimus reprehenderit tempora, necessitatibus architecto sint eos vel officia voluptatibus eveniet magni reiciendis id! Est, atque.
        Esse reiciendis vero commodi laboriosam voluptates, dolorum earum atque cupiditate molestiae veritatis ut quisquam soluta pariatur vitae quo error incidunt ipsum, dicta quae ratione officiis nisi at. Et, quia explicabo.
        Consectetur quo mollitia, culpa id nam dolorem sit neque. Commodi, fugit laudantium. Obcaecati expedita ipsa tempora nisi accusamus. Consectetur dicta esse est ratione atque itaque natus dolores repellendus iste eveniet!
        Fugiat exercitationem dolorum harum ad culpa a nulla atque, soluta modi necessitatibus temporibus asperiores vel aliquam non ex maiores excepturi? Labore tenetur quo aspernatur? Reprehenderit excepturi officia nesciunt ut reiciendis.
        Ipsam illum quibusdam cupiditate laborum repellat quod officia quidem quaerat sit harum molestias quasi rem delectus impedit, eligendi praesentium aperiam possimus, et voluptatibus! Praesentium mollitia quia illo error magnam sequi!
        Ipsam debitis animi quaerat libero consequatur. A, culpa. Quasi omnis aut vitae nisi sint? Voluptatem minima laborum, porro repellendus laudantium nisi quae amet! Temporibus, molestiae? Beatae quo tempora debitis ea?
        Quo officiis tenetur eaque quibusdam repellendus fuga nisi ab sunt nostrum vitae deleniti dolor illum ullam, hic corrupti sed sequi? A dolor maxime minus autem sint esse quae quasi corrupti.
        Dolorem vitae eaque enim accusamus eveniet, quod, quibusdam aspernatur earum cupiditate consectetur blanditiis suscipit, est laudantium. Vitae accusantium perferendis corporis assumenda voluptatum dolorem, adipisci ex doloremque, nisi neque accusamus fuga?
        Commodi ratione deleniti officiis assumenda consequatur voluptate recusandae quae alias dignissimos, facilis neque eligendi voluptatem in blanditiis accusamus molestias. Modi recusandae est dicta libero distinctio neque dolore sunt tempore alias?
        Quos eligendi consectetur sunt repellat inventore dolores, sequi optio numquam iure architecto voluptas a ea reiciendis quaerat. Corporis quo id nihil magnam voluptatibus a harum perferendis porro nulla. Impedit, nesciunt.
        Architecto commodi ut voluptates natus, dolore rerum non vel saepe accusamus, modi eaque ratione repellat nobis, numquam laudantium possimus vero? Ullam quam voluptatem unde sit qui deserunt, autem mollitia ipsa!
        Velit, omnis quis tempora aperiam ducimus at eum nam doloribus doloremque magni fuga nulla culpa, neque nesciunt nihil amet. Nihil error consequuntur est animi libero obcaecati id cumque reprehenderit aliquam?
        Harum iure quam temporibus, numquam eius molestiae hic reprehenderit aliquid eveniet dolorem, voluptates error ipsum! A placeat recusandae, expedita consequuntur explicabo, nemo reiciendis, odit minima earum aliquid illo tempora iusto.
        Ex dolor repellat possimus, quia sapiente libero nobis illo hic rerum voluptatibus optio fugiat tempora eos porro laborum autem sed ea? Praesentium mollitia iste vel tempore explicabo veniam sit est.
        Alias impedit delectus, recusandae facilis voluptatem rerum cupiditate accusantium at sit ea ut eaque blanditiis sapiente, non odit cum, accusamus quod ipsum eius. Cum eum nihil molestias iste voluptatum placeat!
        Corrupti quod doloremque magni rem magnam eaque omnis, ad tenetur unde velit aspernatur ratione voluptate voluptatibus quisquam expedita at placeat. Tempora repudiandae nulla mollitia ratione consectetur, pariatur delectus quae soluta!
        Vitae ipsa asperiores explicabo tempora voluptas non eius iusto, quidem excepturi aperiam, eaque ratione, voluptate dicta maxime dolor quod. Officiis esse nihil quis voluptatibus a est dolore, fugiat hic temporibus.
        Id pariatur, hic mollitia non sequi cupiditate in voluptatem, sunt ex voluptas numquam maxime similique laudantium natus fugit. Quaerat similique totam ipsa eligendi non id rem dolores voluptate culpa illum?
        Ullam iusto neque molestias expedita. Inventore iure eius laboriosam cum magnam officia omnis, vitae qui tempore dolor voluptate ab hic sint totam perspiciatis neque dignissimos a rem ad sit sunt.
        Quibusdam vel, odio ea deleniti laborum consectetur quasi fugit voluptatum doloribus nesciunt iure fugiat, officiis provident nisi nam! Magni ratione dolor voluptatem? Magnam earum aut ipsa aliquam? Earum, inventore natus.
      </div>

      <div className='flex justify-center items-center mt-10'>
        <a href='#mbg' ><LuSquareArrowUp className='h-6 w-6 text-mbg-darkgrey' /></a>
      </div>

    </div>
  )
}

export default MentionsLégales
