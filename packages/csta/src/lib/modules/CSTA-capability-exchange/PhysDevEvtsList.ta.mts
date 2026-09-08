/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ButtonInformation, ButtonInformation_buttonLabel /* IMPORTED_LONG_NAMED_BIT */, ButtonInformation_buttonAssociatedNumber /* IMPORTED_LONG_NAMED_BIT */, ButtonInformation_buttonPressIndicator /* IMPORTED_LONG_NAMED_BIT */, buttonPressIndicator /* IMPORTED_SHORT_NAMED_BIT */, ButtonInformation_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_ButtonInformation, _encode_ButtonInformation } from "../CSTA-capability-exchange/ButtonInformation.ta.mjs";
// export { ButtonInformation, ButtonInformation_buttonLabel /* IMPORTED_LONG_NAMED_BIT */, ButtonInformation_buttonAssociatedNumber /* IMPORTED_LONG_NAMED_BIT */, ButtonInformation_buttonPressIndicator /* IMPORTED_LONG_NAMED_BIT */, buttonPressIndicator /* IMPORTED_SHORT_NAMED_BIT */, ButtonInformation_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_ButtonInformation, _encode_ButtonInformation } from "../CSTA-capability-exchange/ButtonInformation.ta.mjs";
import { ButtonPressEvent, ButtonPressEvent_buttonLabel /* IMPORTED_LONG_NAMED_BIT */, ButtonPressEvent_buttonAssociatedNumber /* IMPORTED_LONG_NAMED_BIT */, ButtonPressEvent_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_ButtonPressEvent, _encode_ButtonPressEvent } from "../CSTA-capability-exchange/ButtonPressEvent.ta.mjs";
// export { ButtonPressEvent, ButtonPressEvent_buttonLabel /* IMPORTED_LONG_NAMED_BIT */, ButtonPressEvent_buttonAssociatedNumber /* IMPORTED_LONG_NAMED_BIT */, ButtonPressEvent_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_ButtonPressEvent, _encode_ButtonPressEvent } from "../CSTA-capability-exchange/ButtonPressEvent.ta.mjs";
import { DisplayUpdated, DisplayUpdated_characterSetASCII /* IMPORTED_LONG_NAMED_BIT */, characterSetASCII /* IMPORTED_SHORT_NAMED_BIT */, DisplayUpdated_characterSetUnicode /* IMPORTED_LONG_NAMED_BIT */, characterSetUnicode /* IMPORTED_SHORT_NAMED_BIT */, DisplayUpdated_characterSetProprietary /* IMPORTED_LONG_NAMED_BIT */, characterSetProprietary /* IMPORTED_SHORT_NAMED_BIT */, DisplayUpdated_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_DisplayUpdated, _encode_DisplayUpdated } from "../CSTA-capability-exchange/DisplayUpdated.ta.mjs";
// export { DisplayUpdated, DisplayUpdated_characterSetASCII /* IMPORTED_LONG_NAMED_BIT */, characterSetASCII /* IMPORTED_SHORT_NAMED_BIT */, DisplayUpdated_characterSetUnicode /* IMPORTED_LONG_NAMED_BIT */, characterSetUnicode /* IMPORTED_SHORT_NAMED_BIT */, DisplayUpdated_characterSetProprietary /* IMPORTED_LONG_NAMED_BIT */, characterSetProprietary /* IMPORTED_SHORT_NAMED_BIT */, DisplayUpdated_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_DisplayUpdated, _encode_DisplayUpdated } from "../CSTA-capability-exchange/DisplayUpdated.ta.mjs";
import { Hookswitch, Hookswitch_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_Hookswitch, _encode_Hookswitch } from "../CSTA-capability-exchange/Hookswitch.ta.mjs";
// export { Hookswitch, Hookswitch_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_Hookswitch, _encode_Hookswitch } from "../CSTA-capability-exchange/Hookswitch.ta.mjs";
import { LampMode, LampMode_lampModeBrokenFlutter /* IMPORTED_LONG_NAMED_BIT */, lampModeBrokenFlutter /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeFlutter /* IMPORTED_LONG_NAMED_BIT */, lampModeFlutter /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeOff /* IMPORTED_LONG_NAMED_BIT */, lampModeOff /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSteady /* IMPORTED_LONG_NAMED_BIT */, lampModeSteady /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeWink /* IMPORTED_LONG_NAMED_BIT */, lampModeWink /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeReserved /* IMPORTED_LONG_NAMED_BIT */, lampModeReserved /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf0 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf0 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf1 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf1 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf2 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf2 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf3 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf3 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf4 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf4 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf5 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf5 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf6 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf6 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf7 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf7 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf8 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf8 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf9 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf9 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf10 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf10 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf11 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf11 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf12 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf12 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf13 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf13 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf14 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf14 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf15 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf15 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf16 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf16 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf17 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf17 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf18 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf18 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf19 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf19 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf20 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf20 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf21 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf21 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf22 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf22 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf23 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf23 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf24 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf24 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf25 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf25 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf26 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf26 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf27 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf27 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf28 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf28 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf29 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf29 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf30 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf30 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf31 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf31 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf32 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf32 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf33 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf33 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf34 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf34 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf35 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf35 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf36 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf36 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf37 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf37 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf38 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf38 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf39 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf39 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf40 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf40 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf41 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf41 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf42 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf42 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf43 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf43 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf44 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf44 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf45 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf45 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf46 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf46 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf47 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf47 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf48 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf48 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf49 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf49 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf50 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf50 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf51 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf51 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf52 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf52 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf53 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf53 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf54 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf54 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf55 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf55 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf56 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf56 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf57 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf57 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf58 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf58 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf59 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf59 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf60 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf60 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf61 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf61 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf62 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf62 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf63 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf63 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf64 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf64 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf65 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf65 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf66 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf66 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf67 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf67 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf68 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf68 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf69 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf69 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf70 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf70 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf71 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf71 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf72 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf72 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf73 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf73 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf74 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf74 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf75 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf75 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf76 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf76 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf77 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf77 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf78 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf78 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf79 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf79 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf80 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf80 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf81 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf81 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf82 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf82 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf83 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf83 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf84 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf84 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf85 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf85 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf86 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf86 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf87 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf87 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf88 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf88 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf89 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf89 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf90 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf90 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf91 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf91 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf92 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf92 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf93 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf93 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf94 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf94 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampBrightnessNormal /* IMPORTED_LONG_NAMED_BIT */, lampBrightnessNormal /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampBrightnessDim /* IMPORTED_LONG_NAMED_BIT */, lampBrightnessDim /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampBrightnessBright /* IMPORTED_LONG_NAMED_BIT */, lampBrightnessBright /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorNoColor /* IMPORTED_LONG_NAMED_BIT */, lampColorNoColor /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorRed /* IMPORTED_LONG_NAMED_BIT */, lampColorRed /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorYellow /* IMPORTED_LONG_NAMED_BIT */, lampColorYellow /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorGreen /* IMPORTED_LONG_NAMED_BIT */, lampColorGreen /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorBlue /* IMPORTED_LONG_NAMED_BIT */, lampColorBlue /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorReserved /* IMPORTED_LONG_NAMED_BIT */, lampColorReserved /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf0 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf0 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf1 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf1 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf2 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf2 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf3 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf3 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf4 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf4 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf5 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf5 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf6 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf6 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf7 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf7 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf8 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf8 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf9 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf9 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf10 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf10 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf11 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf11 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf12 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf12 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf13 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf13 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf14 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf14 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf15 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf15 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf16 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf16 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf17 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf17 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf18 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf18 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf19 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf19 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf20 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf20 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf21 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf21 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf22 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf22 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf23 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf23 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf24 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf24 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf25 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf25 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf26 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf26 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf27 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf27 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf28 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf28 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf29 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf29 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf30 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf30 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf31 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf31 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf32 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf32 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf33 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf33 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf34 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf34 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf35 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf35 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf36 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf36 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf37 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf37 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf38 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf38 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf39 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf39 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf40 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf40 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf41 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf41 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf42 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf42 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf43 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf43 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf44 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf44 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf45 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf45 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf46 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf46 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf47 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf47 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf48 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf48 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf49 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf49 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf50 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf50 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf51 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf51 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf52 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf52 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf53 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf53 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf54 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf54 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf55 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf55 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf56 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf56 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf57 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf57 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf58 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf58 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf59 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf59 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf60 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf60 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf61 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf61 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf62 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf62 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf63 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf63 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf64 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf64 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf65 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf65 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf66 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf66 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf67 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf67 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf68 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf68 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf69 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf69 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf70 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf70 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf71 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf71 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf72 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf72 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf73 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf73 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf74 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf74 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf75 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf75 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf76 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf76 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf77 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf77 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf78 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf78 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf79 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf79 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf80 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf80 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf81 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf81 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf82 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf82 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf83 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf83 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf84 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf84 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf85 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf85 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf86 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf86 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf87 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf87 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf88 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf88 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf89 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf89 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf90 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf90 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf91 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf91 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf92 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf92 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf93 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf93 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf94 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf94 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_LampMode, _encode_LampMode } from "../CSTA-capability-exchange/LampMode.ta.mjs";
// export { LampMode, LampMode_lampModeBrokenFlutter /* IMPORTED_LONG_NAMED_BIT */, lampModeBrokenFlutter /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeFlutter /* IMPORTED_LONG_NAMED_BIT */, lampModeFlutter /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeOff /* IMPORTED_LONG_NAMED_BIT */, lampModeOff /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSteady /* IMPORTED_LONG_NAMED_BIT */, lampModeSteady /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeWink /* IMPORTED_LONG_NAMED_BIT */, lampModeWink /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeReserved /* IMPORTED_LONG_NAMED_BIT */, lampModeReserved /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf0 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf0 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf1 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf1 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf2 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf2 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf3 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf3 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf4 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf4 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf5 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf5 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf6 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf6 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf7 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf7 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf8 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf8 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf9 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf9 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf10 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf10 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf11 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf11 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf12 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf12 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf13 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf13 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf14 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf14 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf15 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf15 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf16 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf16 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf17 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf17 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf18 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf18 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf19 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf19 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf20 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf20 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf21 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf21 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf22 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf22 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf23 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf23 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf24 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf24 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf25 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf25 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf26 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf26 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf27 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf27 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf28 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf28 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf29 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf29 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf30 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf30 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf31 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf31 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf32 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf32 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf33 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf33 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf34 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf34 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf35 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf35 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf36 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf36 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf37 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf37 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf38 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf38 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf39 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf39 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf40 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf40 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf41 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf41 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf42 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf42 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf43 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf43 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf44 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf44 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf45 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf45 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf46 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf46 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf47 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf47 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf48 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf48 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf49 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf49 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf50 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf50 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf51 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf51 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf52 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf52 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf53 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf53 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf54 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf54 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf55 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf55 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf56 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf56 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf57 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf57 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf58 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf58 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf59 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf59 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf60 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf60 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf61 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf61 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf62 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf62 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf63 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf63 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf64 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf64 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf65 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf65 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf66 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf66 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf67 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf67 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf68 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf68 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf69 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf69 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf70 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf70 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf71 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf71 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf72 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf72 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf73 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf73 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf74 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf74 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf75 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf75 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf76 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf76 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf77 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf77 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf78 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf78 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf79 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf79 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf80 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf80 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf81 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf81 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf82 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf82 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf83 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf83 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf84 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf84 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf85 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf85 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf86 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf86 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf87 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf87 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf88 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf88 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf89 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf89 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf90 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf90 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf91 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf91 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf92 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf92 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf93 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf93 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampModeSf94 /* IMPORTED_LONG_NAMED_BIT */, lampModeSf94 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampBrightnessNormal /* IMPORTED_LONG_NAMED_BIT */, lampBrightnessNormal /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampBrightnessDim /* IMPORTED_LONG_NAMED_BIT */, lampBrightnessDim /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampBrightnessBright /* IMPORTED_LONG_NAMED_BIT */, lampBrightnessBright /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorNoColor /* IMPORTED_LONG_NAMED_BIT */, lampColorNoColor /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorRed /* IMPORTED_LONG_NAMED_BIT */, lampColorRed /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorYellow /* IMPORTED_LONG_NAMED_BIT */, lampColorYellow /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorGreen /* IMPORTED_LONG_NAMED_BIT */, lampColorGreen /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorBlue /* IMPORTED_LONG_NAMED_BIT */, lampColorBlue /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorReserved /* IMPORTED_LONG_NAMED_BIT */, lampColorReserved /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf0 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf0 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf1 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf1 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf2 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf2 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf3 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf3 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf4 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf4 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf5 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf5 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf6 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf6 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf7 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf7 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf8 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf8 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf9 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf9 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf10 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf10 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf11 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf11 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf12 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf12 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf13 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf13 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf14 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf14 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf15 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf15 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf16 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf16 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf17 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf17 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf18 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf18 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf19 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf19 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf20 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf20 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf21 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf21 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf22 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf22 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf23 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf23 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf24 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf24 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf25 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf25 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf26 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf26 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf27 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf27 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf28 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf28 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf29 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf29 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf30 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf30 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf31 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf31 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf32 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf32 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf33 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf33 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf34 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf34 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf35 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf35 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf36 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf36 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf37 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf37 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf38 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf38 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf39 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf39 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf40 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf40 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf41 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf41 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf42 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf42 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf43 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf43 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf44 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf44 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf45 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf45 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf46 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf46 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf47 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf47 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf48 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf48 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf49 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf49 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf50 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf50 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf51 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf51 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf52 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf52 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf53 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf53 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf54 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf54 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf55 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf55 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf56 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf56 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf57 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf57 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf58 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf58 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf59 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf59 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf60 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf60 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf61 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf61 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf62 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf62 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf63 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf63 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf64 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf64 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf65 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf65 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf66 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf66 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf67 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf67 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf68 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf68 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf69 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf69 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf70 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf70 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf71 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf71 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf72 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf72 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf73 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf73 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf74 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf74 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf75 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf75 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf76 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf76 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf77 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf77 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf78 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf78 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf79 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf79 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf80 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf80 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf81 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf81 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf82 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf82 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf83 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf83 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf84 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf84 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf85 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf85 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf86 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf86 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf87 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf87 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf88 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf88 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf89 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf89 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf90 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf90 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf91 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf91 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf92 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf92 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf93 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf93 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_lampColorSf94 /* IMPORTED_LONG_NAMED_BIT */, lampColorSf94 /* IMPORTED_SHORT_NAMED_BIT */, LampMode_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_LampMode, _encode_LampMode } from "../CSTA-capability-exchange/LampMode.ta.mjs";
import { MessageWaiting, MessageWaiting_deviceForMsg /* IMPORTED_LONG_NAMED_BIT */, deviceForMsg /* IMPORTED_SHORT_NAMED_BIT */, MessageWaiting_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_MessageWaiting, _encode_MessageWaiting } from "../CSTA-capability-exchange/MessageWaiting.ta.mjs";
// export { MessageWaiting, MessageWaiting_deviceForMsg /* IMPORTED_LONG_NAMED_BIT */, deviceForMsg /* IMPORTED_SHORT_NAMED_BIT */, MessageWaiting_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_MessageWaiting, _encode_MessageWaiting } from "../CSTA-capability-exchange/MessageWaiting.ta.mjs";
import { MicrophoneGain, MicrophoneGain_microphoneGainAbs /* IMPORTED_LONG_NAMED_BIT */, microphoneGainAbs /* IMPORTED_SHORT_NAMED_BIT */, MicrophoneGain_microphoneGainInc /* IMPORTED_LONG_NAMED_BIT */, microphoneGainInc /* IMPORTED_SHORT_NAMED_BIT */, MicrophoneGain_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_MicrophoneGain, _encode_MicrophoneGain } from "../CSTA-capability-exchange/MicrophoneGain.ta.mjs";
// export { MicrophoneGain, MicrophoneGain_microphoneGainAbs /* IMPORTED_LONG_NAMED_BIT */, microphoneGainAbs /* IMPORTED_SHORT_NAMED_BIT */, MicrophoneGain_microphoneGainInc /* IMPORTED_LONG_NAMED_BIT */, microphoneGainInc /* IMPORTED_SHORT_NAMED_BIT */, MicrophoneGain_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_MicrophoneGain, _encode_MicrophoneGain } from "../CSTA-capability-exchange/MicrophoneGain.ta.mjs";
import { MicrophoneMute, MicrophoneMute_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_MicrophoneMute, _encode_MicrophoneMute } from "../CSTA-capability-exchange/MicrophoneMute.ta.mjs";
// export { MicrophoneMute, MicrophoneMute_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_MicrophoneMute, _encode_MicrophoneMute } from "../CSTA-capability-exchange/MicrophoneMute.ta.mjs";
import { RingerStatus, RingerStatus_ringerModeRinging /* IMPORTED_LONG_NAMED_BIT */, ringerModeRinging /* IMPORTED_SHORT_NAMED_BIT */, RingerStatus_ringerModeNotRinging /* IMPORTED_LONG_NAMED_BIT */, ringerModeNotRinging /* IMPORTED_SHORT_NAMED_BIT */, RingerStatus_ringCount /* IMPORTED_LONG_NAMED_BIT */, ringCount /* IMPORTED_SHORT_NAMED_BIT */, RingerStatus_ringPattern /* IMPORTED_LONG_NAMED_BIT */, ringPattern /* IMPORTED_SHORT_NAMED_BIT */, RingerStatus_ringVolumeAbs /* IMPORTED_LONG_NAMED_BIT */, ringVolumeAbs /* IMPORTED_SHORT_NAMED_BIT */, RingerStatus_ringVolumeInc /* IMPORTED_LONG_NAMED_BIT */, ringVolumeInc /* IMPORTED_SHORT_NAMED_BIT */, RingerStatus_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_RingerStatus, _encode_RingerStatus } from "../CSTA-capability-exchange/RingerStatus.ta.mjs";
// export { RingerStatus, RingerStatus_ringerModeRinging /* IMPORTED_LONG_NAMED_BIT */, ringerModeRinging /* IMPORTED_SHORT_NAMED_BIT */, RingerStatus_ringerModeNotRinging /* IMPORTED_LONG_NAMED_BIT */, ringerModeNotRinging /* IMPORTED_SHORT_NAMED_BIT */, RingerStatus_ringCount /* IMPORTED_LONG_NAMED_BIT */, ringCount /* IMPORTED_SHORT_NAMED_BIT */, RingerStatus_ringPattern /* IMPORTED_LONG_NAMED_BIT */, ringPattern /* IMPORTED_SHORT_NAMED_BIT */, RingerStatus_ringVolumeAbs /* IMPORTED_LONG_NAMED_BIT */, ringVolumeAbs /* IMPORTED_SHORT_NAMED_BIT */, RingerStatus_ringVolumeInc /* IMPORTED_LONG_NAMED_BIT */, ringVolumeInc /* IMPORTED_SHORT_NAMED_BIT */, RingerStatus_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_RingerStatus, _encode_RingerStatus } from "../CSTA-capability-exchange/RingerStatus.ta.mjs";
import { SpeakerMute, SpeakerMute_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_SpeakerMute, _encode_SpeakerMute } from "../CSTA-capability-exchange/SpeakerMute.ta.mjs";
// export { SpeakerMute, SpeakerMute_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_SpeakerMute, _encode_SpeakerMute } from "../CSTA-capability-exchange/SpeakerMute.ta.mjs";
import { SpeakerVolume, SpeakerVolume_speakerVolumeAbs /* IMPORTED_LONG_NAMED_BIT */, speakerVolumeAbs /* IMPORTED_SHORT_NAMED_BIT */, SpeakerVolume_speakerVolumeInc /* IMPORTED_LONG_NAMED_BIT */, speakerVolumeInc /* IMPORTED_SHORT_NAMED_BIT */, SpeakerVolume_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_SpeakerVolume, _encode_SpeakerVolume } from "../CSTA-capability-exchange/SpeakerVolume.ta.mjs";
// export { SpeakerVolume, SpeakerVolume_speakerVolumeAbs /* IMPORTED_LONG_NAMED_BIT */, speakerVolumeAbs /* IMPORTED_SHORT_NAMED_BIT */, SpeakerVolume_speakerVolumeInc /* IMPORTED_LONG_NAMED_BIT */, speakerVolumeInc /* IMPORTED_SHORT_NAMED_BIT */, SpeakerVolume_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_SpeakerVolume, _encode_SpeakerVolume } from "../CSTA-capability-exchange/SpeakerVolume.ta.mjs";


/**
 * @summary PhysDevEvtsList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PhysDevEvtsList ::= SEQUENCE
 * {     buttonInformation         [ 0] IMPLICIT     ButtonInformation         OPTIONAL,
 *     buttonPress             [ 1] IMPLICIT     ButtonPressEvent         OPTIONAL,
 *     displayUpdated             [ 2] IMPLICIT     DisplayUpdated             OPTIONAL,
 *     hookswitch             [ 3] IMPLICIT     Hookswitch             OPTIONAL,
 *     lampMode             [ 4] IMPLICIT     LampMode             OPTIONAL,
 *     messageWaiting             [ 5] IMPLICIT     MessageWaiting             OPTIONAL,
 *     microphoneGain             [ 6] IMPLICIT     MicrophoneGain             OPTIONAL,
 *     microphoneMute             [ 7] IMPLICIT     MicrophoneMute             OPTIONAL,
 *     ringerStatus             [ 8] IMPLICIT     RingerStatus             OPTIONAL,
 *     speakerMute             [ 9] IMPLICIT     SpeakerMute             OPTIONAL,
 *     speakerVolume             [10] IMPLICIT     SpeakerVolume             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class PhysDevEvtsList {
    constructor (
        /**
         * @summary `buttonInformation`.
         * @public
         * @readonly
         */
        readonly buttonInformation: OPTIONAL<ButtonInformation>,
        /**
         * @summary `buttonPress`.
         * @public
         * @readonly
         */
        readonly buttonPress: OPTIONAL<ButtonPressEvent>,
        /**
         * @summary `displayUpdated`.
         * @public
         * @readonly
         */
        readonly displayUpdated: OPTIONAL<DisplayUpdated>,
        /**
         * @summary `hookswitch`.
         * @public
         * @readonly
         */
        readonly hookswitch: OPTIONAL<Hookswitch>,
        /**
         * @summary `lampMode`.
         * @public
         * @readonly
         */
        readonly lampMode: OPTIONAL<LampMode>,
        /**
         * @summary `messageWaiting`.
         * @public
         * @readonly
         */
        readonly messageWaiting: OPTIONAL<MessageWaiting>,
        /**
         * @summary `microphoneGain`.
         * @public
         * @readonly
         */
        readonly microphoneGain: OPTIONAL<MicrophoneGain>,
        /**
         * @summary `microphoneMute`.
         * @public
         * @readonly
         */
        readonly microphoneMute: OPTIONAL<MicrophoneMute>,
        /**
         * @summary `ringerStatus`.
         * @public
         * @readonly
         */
        readonly ringerStatus: OPTIONAL<RingerStatus>,
        /**
         * @summary `speakerMute`.
         * @public
         * @readonly
         */
        readonly speakerMute: OPTIONAL<SpeakerMute>,
        /**
         * @summary `speakerVolume`.
         * @public
         * @readonly
         */
        readonly speakerVolume: OPTIONAL<SpeakerVolume>
    ) {}

    /**
     * @summary Restructures an object into a PhysDevEvtsList
     * @description
     * 
     * This takes an `object` and converts it to a `PhysDevEvtsList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PhysDevEvtsList`.
     * @returns {PhysDevEvtsList}
     */
    public static _from_object (_o: { [_K in keyof (PhysDevEvtsList)]: (PhysDevEvtsList)[_K] }): PhysDevEvtsList {
        return new PhysDevEvtsList(_o.buttonInformation, _o.buttonPress, _o.displayUpdated, _o.hookswitch, _o.lampMode, _o.messageWaiting, _o.microphoneGain, _o.microphoneMute, _o.ringerStatus, _o.speakerMute, _o.speakerVolume);
    }


}

/**
 * @summary The Leading Root Component Types of PhysDevEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PhysDevEvtsList: $.ComponentSpec[] = [
    new $.ComponentSpec("buttonInformation", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("buttonPress", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("displayUpdated", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("hookswitch", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("lampMode", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("messageWaiting", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("microphoneGain", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("microphoneMute", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("ringerStatus", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("speakerMute", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("speakerVolume", true, $.hasTag(_TagClass.context, 10), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of PhysDevEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PhysDevEvtsList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PhysDevEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PhysDevEvtsList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PhysDevEvtsList: $.ASN1Decoder<PhysDevEvtsList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PhysDevEvtsList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PhysDevEvtsList (el: _Element): PhysDevEvtsList {
    if (!_cached_decoder_for_PhysDevEvtsList) { _cached_decoder_for_PhysDevEvtsList = function (el: _Element): PhysDevEvtsList {
    let buttonInformation: OPTIONAL<ButtonInformation>;
    let buttonPress: OPTIONAL<ButtonPressEvent>;
    let displayUpdated: OPTIONAL<DisplayUpdated>;
    let hookswitch: OPTIONAL<Hookswitch>;
    let lampMode: OPTIONAL<LampMode>;
    let messageWaiting: OPTIONAL<MessageWaiting>;
    let microphoneGain: OPTIONAL<MicrophoneGain>;
    let microphoneMute: OPTIONAL<MicrophoneMute>;
    let ringerStatus: OPTIONAL<RingerStatus>;
    let speakerMute: OPTIONAL<SpeakerMute>;
    let speakerVolume: OPTIONAL<SpeakerVolume>;
    const callbacks: $.DecodingMap = {
        "buttonInformation": (_el: _Element): void => { buttonInformation = $._decode_implicit<ButtonInformation>(() => _decode_ButtonInformation)(_el); },
        "buttonPress": (_el: _Element): void => { buttonPress = $._decode_implicit<ButtonPressEvent>(() => _decode_ButtonPressEvent)(_el); },
        "displayUpdated": (_el: _Element): void => { displayUpdated = $._decode_implicit<DisplayUpdated>(() => _decode_DisplayUpdated)(_el); },
        "hookswitch": (_el: _Element): void => { hookswitch = $._decode_implicit<Hookswitch>(() => _decode_Hookswitch)(_el); },
        "lampMode": (_el: _Element): void => { lampMode = $._decode_implicit<LampMode>(() => _decode_LampMode)(_el); },
        "messageWaiting": (_el: _Element): void => { messageWaiting = $._decode_implicit<MessageWaiting>(() => _decode_MessageWaiting)(_el); },
        "microphoneGain": (_el: _Element): void => { microphoneGain = $._decode_implicit<MicrophoneGain>(() => _decode_MicrophoneGain)(_el); },
        "microphoneMute": (_el: _Element): void => { microphoneMute = $._decode_implicit<MicrophoneMute>(() => _decode_MicrophoneMute)(_el); },
        "ringerStatus": (_el: _Element): void => { ringerStatus = $._decode_implicit<RingerStatus>(() => _decode_RingerStatus)(_el); },
        "speakerMute": (_el: _Element): void => { speakerMute = $._decode_implicit<SpeakerMute>(() => _decode_SpeakerMute)(_el); },
        "speakerVolume": (_el: _Element): void => { speakerVolume = $._decode_implicit<SpeakerVolume>(() => _decode_SpeakerVolume)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PhysDevEvtsList,
        _extension_additions_list_spec_for_PhysDevEvtsList,
        _root_component_type_list_2_spec_for_PhysDevEvtsList,
        undefined,
    );
    return new PhysDevEvtsList(
        buttonInformation,
        buttonPress,
        displayUpdated,
        hookswitch,
        lampMode,
        messageWaiting,
        microphoneGain,
        microphoneMute,
        ringerStatus,
        speakerMute,
        speakerVolume
    );
}; }
    return _cached_decoder_for_PhysDevEvtsList(el);
}

let _cached_encoder_for_PhysDevEvtsList: $.ASN1Encoder<PhysDevEvtsList> | null = null;

/**
 * @summary Encodes a(n) PhysDevEvtsList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysDevEvtsList, encoded as an ASN.1 Element.
 */
export
function _encode_PhysDevEvtsList (value: PhysDevEvtsList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PhysDevEvtsList) { _cached_encoder_for_PhysDevEvtsList = function (value: PhysDevEvtsList, elGetter: $.ASN1Encoder<PhysDevEvtsList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.buttonInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ButtonInformation, $.BER)(value.buttonInformation, $.BER)),
            /* IF_ABSENT  */ ((value.buttonPress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ButtonPressEvent, $.BER)(value.buttonPress, $.BER)),
            /* IF_ABSENT  */ ((value.displayUpdated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_DisplayUpdated, $.BER)(value.displayUpdated, $.BER)),
            /* IF_ABSENT  */ ((value.hookswitch === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Hookswitch, $.BER)(value.hookswitch, $.BER)),
            /* IF_ABSENT  */ ((value.lampMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_LampMode, $.BER)(value.lampMode, $.BER)),
            /* IF_ABSENT  */ ((value.messageWaiting === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_MessageWaiting, $.BER)(value.messageWaiting, $.BER)),
            /* IF_ABSENT  */ ((value.microphoneGain === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_MicrophoneGain, $.BER)(value.microphoneGain, $.BER)),
            /* IF_ABSENT  */ ((value.microphoneMute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_MicrophoneMute, $.BER)(value.microphoneMute, $.BER)),
            /* IF_ABSENT  */ ((value.ringerStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_RingerStatus, $.BER)(value.ringerStatus, $.BER)),
            /* IF_ABSENT  */ ((value.speakerMute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_SpeakerMute, $.BER)(value.speakerMute, $.BER)),
            /* IF_ABSENT  */ ((value.speakerVolume === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_SpeakerVolume, $.BER)(value.speakerVolume, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PhysDevEvtsList(value, elGetter);
}


/* eslint-enable */
