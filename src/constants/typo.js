import { colors } from "./colors"
import { pixeltopt } from '../functions/pixeltoptconverter'
export const typo = {
    h1: {
        fontSize: 16.53,
        fontFamily: 'Inter',
        fontWeight: 500,
        color: colors.black,
        textAlign: 'center',
    },
    h1raw: {
        fontSize: 16.53,
        fontFamily: 'Inter',
        fontWeight: 500,
        color: colors.black,
    },
    h1rawgray: {
        fontSize: pixeltopt(22),
        fontFamily: 'Inter',
        fontWeight: 500,
        color: colors.black,
        fontFamily: 'Inter',
    },
    h2: {
        fontSize: 11.28,
        fontWeight: 500,
        color: colors.black,
        textAlign: 'center',
        fontFamily: 'Inter',
        opacity: 0.30000001192092896
    },
    h2raw: {
        fontSize: 13.53,
        fontFamily: 'Inter',
        fontWeight: 500,
        color: colors.black,
    },
    h2rawgrey: {
        opacity: 0.5,
        fontSize: 13.53,
        fontFamily: 'Inter',
        fontWeight: 500,
        color: colors.black,
    },
    smallTitle: { fontSize: pixeltopt(18), fontFamily: 'Inter', fontWeight: 400, color: colors.black },
    Title: { fontSize: pixeltopt(33), fontWeight: 500, color: colors.black, fontFamily: 'Inter' },
    placeholderGrey: {
        fontSize: 15.04,
        opacity: 0.5,
        fontFamily: 'Inter',
        color: colors.black,
    },
    placeholderSmall: {
        fontSize: 10.53,
        fontFamily: 'Inter',
        color: colors.black,
    },
    placeholder: {
        fontSize: pixeltopt(16),
        fontFamily: 'Inter',
        color: colors.black,
    },
    buttonText: {
        fontSize: 15.04,
        fontFamily: 'Inter',
        color: colors.white,
        fontWeight: 400
    },
    h3: {
        fontSize: 7.52,
        fontFamily: 'Inter',
        color: colors.black,
        fontWeight: 400,
    },
    p: {
        fontSize: 6.02,
        fontFamily: 'Inter',
        color: colors.black,
        fontWeight: 400,
        opacity: 0.5
    },
    regular: {
        fontSize: 11.02,
        fontFamily: 'Inter',
        color: colors.black,
        fontWeight: 400,
        opacity: 0.5
    },
    pBig: {
        fontSize: 9.77,
        fontFamily: 'Inter',
        color: colors.black,
        fontWeight: 400,
        opacity: 0.5
    },
    pBigger: {
        fontSize: 16.77,
        fontFamily: 'Inter',
        color: colors.black,
        fontWeight: 'bold',
    }
}