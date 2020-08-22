import Vue from 'vue'

Vue.prototype.$const = {
    plot: [
        {
            character: '???',
            background: require('@/assets/backgroundImage/upstairs.jpg'),
            color: false,
            face: require('@/assets/faceVariations/necchusyou_face_girl1.png'),
            message: [
                'お帰りなさい',
                'ん……？',
                'あーあ、お前か？前世の記憶がないってやつは。'
            ]
        },
        {
            character: 'ボク',
            face: require('@/assets/faceVariations/enmadaiou.png'),
            color: true,
            message: [
                'ええ、自分が一体誰なのか、',
                'そもそもなんで死んだのかまったく思い出せないんです。',
            ]
        },
        {
            character: 'エンマ',
            background: require('@/assets/backgroundImage/upstairs.jpg'),
            face: require('@/assets/faceVariations/enmadaiou.png'),
            color: false,
            message: [
                'お前さんねぇ、今どきそんな嘘ついたって天国には行けはしねぇのよ。'
            ]
        },
        {
            character: 'ボク',
            face: require('@/assets/faceVariations/enmadaiou.png'),
            color: true,
            message: [
                '……………………………',
            ]
        },
        {
            character: 'エンマ',
            background: require('@/assets/backgroundImage/upstairs.jpg'),
            face: require('@/assets/faceVariations/enmadaiou.png'),
            color: false,
            message: [
                'でもまぁ、',
                'お前にチャンスをやろう。',
                '100秒だ。',
                'お前が死ぬ100秒前の世界に行かせてやる。',
                'そこで自分がなぜ死んだのか見てこい。',
                'もし真実にたどり着くことができた時は、選ばせてやるよ、',
                '天国に行くか、地獄に行くかをな。。'
            ]
        },
        {
            character: 'ボク',
            face: require('@/assets/faceVariations/enmadaiou.png'),
            color: true,
            message: [
                '(そんなもの天国に行くに決まってるじゃないか)',
                'でも、もし真実に到達できなかったらどうなるんだ？'
            ]
        },
        {
            character: 'エンマ',
            background: require('@/assets/backgroundImage/upstairs.jpg'),
            face: require('@/assets/faceVariations/enmadaiou.png'),
            color: false,
            message: [
                '……………ふふふ',
                'それには答えられねぇな。それに死人に"口無し"だろ？',
                'さぁ行って来い…'
            ]
        },
    ]
}
