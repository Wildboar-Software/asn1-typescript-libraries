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
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
// export { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
import { TelephonyTone, _enum_for_TelephonyTone, TelephonyTone_beep /* IMPORTED_LONG_ENUMERATION_ITEM */, beep /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_billing /* IMPORTED_LONG_ENUMERATION_ITEM */, billing /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_busy /* IMPORTED_LONG_ENUMERATION_ITEM */, busy /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_carrier /* IMPORTED_LONG_ENUMERATION_ITEM */, carrier /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_confirmation /* IMPORTED_LONG_ENUMERATION_ITEM */, confirmation /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_dial /* IMPORTED_LONG_ENUMERATION_ITEM */, dial /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_faxCNG /* IMPORTED_LONG_ENUMERATION_ITEM */, faxCNG /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_hold /* IMPORTED_LONG_ENUMERATION_ITEM */, hold /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_howler /* IMPORTED_LONG_ENUMERATION_ITEM */, howler /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_intrusion /* IMPORTED_LONG_ENUMERATION_ITEM */, intrusion /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_modemCNG /* IMPORTED_LONG_ENUMERATION_ITEM */, modemCNG /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_park /* IMPORTED_LONG_ENUMERATION_ITEM */, park /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_recordWarning /* IMPORTED_LONG_ENUMERATION_ITEM */, recordWarning /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_reorder /* IMPORTED_LONG_ENUMERATION_ITEM */, reorder /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_ringback /* IMPORTED_LONG_ENUMERATION_ITEM */, ringback /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_silence /* IMPORTED_LONG_ENUMERATION_ITEM */, silence /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_sitVC /* IMPORTED_LONG_ENUMERATION_ITEM */, sitVC /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_sitIC /* IMPORTED_LONG_ENUMERATION_ITEM */, sitIC /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_sitRO /* IMPORTED_LONG_ENUMERATION_ITEM */, sitRO /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_sitNC /* IMPORTED_LONG_ENUMERATION_ITEM */, sitNC /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec0 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec0 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec1 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec2 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec3 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec4 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec5 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec6 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec7 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec7 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec8 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec9 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec9 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec10 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec10 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec11 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec11 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec12 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec12 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec13 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec13 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec14 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec14 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec15 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec15 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec16 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec16 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec17 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec17 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec18 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec18 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec19 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec19 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec20 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec20 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec21 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec21 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec22 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec22 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec23 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec23 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec24 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec24 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec25 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec25 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec26 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec26 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec27 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec27 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec28 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec28 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec29 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec29 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec30 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec30 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec31 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec31 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec32 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec32 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec33 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec33 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec34 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec34 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec35 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec35 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec36 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec36 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec37 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec37 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec38 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec38 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec39 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec39 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec40 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec40 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec41 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec41 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec42 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec42 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec43 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec43 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec44 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec44 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec45 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec45 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec46 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec46 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec47 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec47 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec48 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec48 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec49 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec49 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec50 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec50 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec51 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec51 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec52 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec52 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec53 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec53 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec54 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec54 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec55 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec55 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec56 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec56 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec57 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec57 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec58 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec58 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec59 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec59 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec60 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec60 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec61 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec61 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec62 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec62 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec63 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec63 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec64 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec64 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec65 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec65 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec66 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec66 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec67 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec67 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec68 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec68 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec69 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec69 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec70 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec70 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec71 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec71 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec72 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec72 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec73 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec73 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec74 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec74 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec75 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec75 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec76 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec76 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec77 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec77 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec78 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec78 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec79 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec79 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec80 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec80 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec81 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec81 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec82 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec82 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec83 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec83 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec84 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec84 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec85 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec85 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec86 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec86 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec87 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec87 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec88 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec88 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec89 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec89 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec90 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec90 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec91 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec91 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec92 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec92 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec93 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec93 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec94 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec94 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec95 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec95 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec96 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec96 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec97 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec97 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec98 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec98 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec99 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec99 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec100 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec100 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TelephonyTone, _encode_TelephonyTone } from "../CSTA-device-feature-types/TelephonyTone.ta.mjs";
// export { TelephonyTone, _enum_for_TelephonyTone, TelephonyTone_beep /* IMPORTED_LONG_ENUMERATION_ITEM */, beep /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_billing /* IMPORTED_LONG_ENUMERATION_ITEM */, billing /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_busy /* IMPORTED_LONG_ENUMERATION_ITEM */, busy /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_carrier /* IMPORTED_LONG_ENUMERATION_ITEM */, carrier /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_confirmation /* IMPORTED_LONG_ENUMERATION_ITEM */, confirmation /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_dial /* IMPORTED_LONG_ENUMERATION_ITEM */, dial /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_faxCNG /* IMPORTED_LONG_ENUMERATION_ITEM */, faxCNG /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_hold /* IMPORTED_LONG_ENUMERATION_ITEM */, hold /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_howler /* IMPORTED_LONG_ENUMERATION_ITEM */, howler /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_intrusion /* IMPORTED_LONG_ENUMERATION_ITEM */, intrusion /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_modemCNG /* IMPORTED_LONG_ENUMERATION_ITEM */, modemCNG /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_park /* IMPORTED_LONG_ENUMERATION_ITEM */, park /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_recordWarning /* IMPORTED_LONG_ENUMERATION_ITEM */, recordWarning /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_reorder /* IMPORTED_LONG_ENUMERATION_ITEM */, reorder /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_ringback /* IMPORTED_LONG_ENUMERATION_ITEM */, ringback /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_silence /* IMPORTED_LONG_ENUMERATION_ITEM */, silence /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_sitVC /* IMPORTED_LONG_ENUMERATION_ITEM */, sitVC /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_sitIC /* IMPORTED_LONG_ENUMERATION_ITEM */, sitIC /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_sitRO /* IMPORTED_LONG_ENUMERATION_ITEM */, sitRO /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_sitNC /* IMPORTED_LONG_ENUMERATION_ITEM */, sitNC /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec0 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec0 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec1 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec2 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec3 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec4 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec5 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec6 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec7 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec7 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec8 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec9 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec9 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec10 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec10 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec11 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec11 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec12 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec12 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec13 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec13 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec14 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec14 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec15 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec15 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec16 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec16 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec17 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec17 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec18 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec18 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec19 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec19 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec20 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec20 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec21 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec21 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec22 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec22 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec23 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec23 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec24 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec24 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec25 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec25 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec26 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec26 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec27 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec27 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec28 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec28 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec29 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec29 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec30 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec30 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec31 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec31 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec32 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec32 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec33 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec33 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec34 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec34 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec35 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec35 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec36 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec36 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec37 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec37 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec38 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec38 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec39 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec39 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec40 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec40 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec41 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec41 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec42 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec42 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec43 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec43 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec44 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec44 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec45 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec45 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec46 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec46 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec47 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec47 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec48 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec48 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec49 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec49 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec50 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec50 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec51 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec51 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec52 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec52 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec53 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec53 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec54 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec54 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec55 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec55 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec56 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec56 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec57 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec57 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec58 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec58 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec59 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec59 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec60 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec60 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec61 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec61 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec62 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec62 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec63 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec63 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec64 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec64 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec65 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec65 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec66 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec66 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec67 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec67 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec68 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec68 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec69 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec69 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec70 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec70 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec71 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec71 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec72 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec72 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec73 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec73 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec74 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec74 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec75 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec75 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec76 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec76 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec77 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec77 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec78 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec78 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec79 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec79 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec80 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec80 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec81 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec81 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec82 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec82 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec83 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec83 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec84 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec84 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec85 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec85 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec86 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec86 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec87 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec87 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec88 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec88 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec89 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec89 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec90 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec90 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec91 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec91 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec92 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec92 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec93 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec93 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec94 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec94 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec95 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec95 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec96 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec96 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec97 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec97 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec98 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec98 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec99 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec99 /* IMPORTED_SHORT_ENUMERATION_ITEM */, TelephonyTone_switchSpec100 /* IMPORTED_LONG_ENUMERATION_ITEM */, switchSpec100 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TelephonyTone, _encode_TelephonyTone } from "../CSTA-device-feature-types/TelephonyTone.ta.mjs";
import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
// export { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary TelephonyTonesGeneratedEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TelephonyTonesGeneratedEvent ::= SEQUENCE
 * {    connection            ConnectionID,
 *     toneGenerated            TelephonyTone            OPTIONAL,
 *     toneFrequency            [0] IMPLICIT INTEGER        OPTIONAL,
 *     toneDuration            [1] IMPLICIT INTEGER        OPTIONAL,
 *     pauseDuration            [2] IMPLICIT INTEGER        OPTIONAL,
 *     connectionInfo            ConnectionInformation        OPTIONAL,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class TelephonyTonesGeneratedEvent {
    constructor (
        /**
         * @summary `connection`.
         * @public
         * @readonly
         */
        readonly connection: ConnectionID,
        /**
         * @summary `toneGenerated`.
         * @public
         * @readonly
         */
        readonly toneGenerated: OPTIONAL<TelephonyTone>,
        /**
         * @summary `toneFrequency`.
         * @public
         * @readonly
         */
        readonly toneFrequency: OPTIONAL<INTEGER>,
        /**
         * @summary `toneDuration`.
         * @public
         * @readonly
         */
        readonly toneDuration: OPTIONAL<INTEGER>,
        /**
         * @summary `pauseDuration`.
         * @public
         * @readonly
         */
        readonly pauseDuration: OPTIONAL<INTEGER>,
        /**
         * @summary `connectionInfo`.
         * @public
         * @readonly
         */
        readonly connectionInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a TelephonyTonesGeneratedEvent
     * @description
     * 
     * This takes an `object` and converts it to a `TelephonyTonesGeneratedEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TelephonyTonesGeneratedEvent`.
     * @returns {TelephonyTonesGeneratedEvent}
     */
    public static _from_object (_o: { [_K in keyof (TelephonyTonesGeneratedEvent)]: (TelephonyTonesGeneratedEvent)[_K] }): TelephonyTonesGeneratedEvent {
        return new TelephonyTonesGeneratedEvent(_o.connection, _o.toneGenerated, _o.toneFrequency, _o.toneDuration, _o.pauseDuration, _o.connectionInfo, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `toneGenerated`
         * @public
         * @static
         */

    public static _enum_for_toneGenerated = _enum_for_TelephonyTone;
}

/**
 * @summary The Leading Root Component Types of TelephonyTonesGeneratedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TelephonyTonesGeneratedEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("connection", false, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("toneGenerated", true, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("toneFrequency", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("toneDuration", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("pauseDuration", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("connectionInfo", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of TelephonyTonesGeneratedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TelephonyTonesGeneratedEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TelephonyTonesGeneratedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TelephonyTonesGeneratedEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TelephonyTonesGeneratedEvent: $.ASN1Decoder<TelephonyTonesGeneratedEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TelephonyTonesGeneratedEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TelephonyTonesGeneratedEvent (el: _Element): TelephonyTonesGeneratedEvent {
    if (!_cached_decoder_for_TelephonyTonesGeneratedEvent) { _cached_decoder_for_TelephonyTonesGeneratedEvent = function (el: _Element): TelephonyTonesGeneratedEvent {
    let connection!: ConnectionID;
    let toneGenerated: OPTIONAL<TelephonyTone>;
    let toneFrequency: OPTIONAL<INTEGER>;
    let toneDuration: OPTIONAL<INTEGER>;
    let pauseDuration: OPTIONAL<INTEGER>;
    let connectionInfo: OPTIONAL<ConnectionInformation>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "connection": (_el: _Element): void => { connection = _decode_ConnectionID(_el); },
        "toneGenerated": (_el: _Element): void => { toneGenerated = _decode_TelephonyTone(_el); },
        "toneFrequency": (_el: _Element): void => { toneFrequency = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "toneDuration": (_el: _Element): void => { toneDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "pauseDuration": (_el: _Element): void => { pauseDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "connectionInfo": (_el: _Element): void => { connectionInfo = _decode_ConnectionInformation(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TelephonyTonesGeneratedEvent,
        _extension_additions_list_spec_for_TelephonyTonesGeneratedEvent,
        _root_component_type_list_2_spec_for_TelephonyTonesGeneratedEvent,
        undefined,
    );
    return new TelephonyTonesGeneratedEvent(
        connection,
        toneGenerated,
        toneFrequency,
        toneDuration,
        pauseDuration,
        connectionInfo,
        extensions
    );
}; }
    return _cached_decoder_for_TelephonyTonesGeneratedEvent(el);
}

let _cached_encoder_for_TelephonyTonesGeneratedEvent: $.ASN1Encoder<TelephonyTonesGeneratedEvent> | null = null;

/**
 * @summary Encodes a(n) TelephonyTonesGeneratedEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TelephonyTonesGeneratedEvent, encoded as an ASN.1 Element.
 */
export
function _encode_TelephonyTonesGeneratedEvent (value: TelephonyTonesGeneratedEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TelephonyTonesGeneratedEvent) { _cached_encoder_for_TelephonyTonesGeneratedEvent = function (value: TelephonyTonesGeneratedEvent, elGetter: $.ASN1Encoder<TelephonyTonesGeneratedEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connection, $.BER),
            /* IF_ABSENT  */ ((value.toneGenerated === undefined) ? undefined : _encode_TelephonyTone(value.toneGenerated, $.BER)),
            /* IF_ABSENT  */ ((value.toneFrequency === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.toneFrequency, $.BER)),
            /* IF_ABSENT  */ ((value.toneDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.toneDuration, $.BER)),
            /* IF_ABSENT  */ ((value.pauseDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.pauseDuration, $.BER)),
            /* IF_ABSENT  */ ((value.connectionInfo === undefined) ? undefined : _encode_ConnectionInformation(value.connectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TelephonyTonesGeneratedEvent(value, elGetter);
}


/* eslint-enable */
