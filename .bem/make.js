//process.env.YENV = 'production';

MAKE.decl('Arch', {

    libraries: {
        'libs/bem-bl': {
            type: 'git',
            url: 'git://github.com/bem/bem-bl.git',
            treeish: '0.3'
        }
    }

});

