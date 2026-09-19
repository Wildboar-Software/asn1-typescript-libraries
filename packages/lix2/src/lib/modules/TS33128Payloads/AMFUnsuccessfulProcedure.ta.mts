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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AMFFailedProcedureType, _enum_for_AMFFailedProcedureType, AMFFailedProcedureType_registration /* IMPORTED_LONG_ENUMERATION_ITEM */, registration /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFFailedProcedureType_sMS /* IMPORTED_LONG_ENUMERATION_ITEM */, sMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFFailedProcedureType_pDUSessionEstablishment /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionEstablishment /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AMFFailedProcedureType, _encode_AMFFailedProcedureType } from "../TS33128Payloads/AMFFailedProcedureType.ta.mjs";
// export { AMFFailedProcedureType, _enum_for_AMFFailedProcedureType, AMFFailedProcedureType_registration /* IMPORTED_LONG_ENUMERATION_ITEM */, registration /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFFailedProcedureType_sMS /* IMPORTED_LONG_ENUMERATION_ITEM */, sMS /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFFailedProcedureType_pDUSessionEstablishment /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionEstablishment /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AMFFailedProcedureType, _encode_AMFFailedProcedureType } from "../TS33128Payloads/AMFFailedProcedureType.ta.mjs";
import { AMFFailureCause, _decode_AMFFailureCause, _encode_AMFFailureCause } from "../TS33128Payloads/AMFFailureCause.ta.mjs";
// export { AMFFailureCause, _decode_AMFFailureCause, _encode_AMFFailureCause } from "../TS33128Payloads/AMFFailureCause.ta.mjs";
import { NSSAI, _decode_NSSAI, _encode_NSSAI } from "../TS33128Payloads/NSSAI.ta.mjs";
// export { NSSAI, _decode_NSSAI, _encode_NSSAI } from "../TS33128Payloads/NSSAI.ta.mjs";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
// export { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";
// export { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";


/**
 * @summary AMFUnsuccessfulProcedure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFUnsuccessfulProcedure ::= SEQUENCE
 * {
 *     failedProcedureType         [1] AMFFailedProcedureType,
 *     failureCause                [2] AMFFailureCause,
 *     requestedSlice              [3] NSSAI OPTIONAL,
 *     sUPI                        [4] SUPI OPTIONAL,
 *     sUCI                        [5] SUCI OPTIONAL,
 *     pEI                         [6] PEI OPTIONAL,
 *     gPSI                        [7] GPSI OPTIONAL,
 *     gUTI                        [8] FiveGGUTI OPTIONAL,
 *     location                    [9] Location OPTIONAL,
 *     additionalUserIdentifiers   [10] UserIdentifiers OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AMFUnsuccessfulProcedure {
    constructor (
        /**
         * @summary `failedProcedureType`.
         * @public
         * @readonly
         */
        readonly failedProcedureType: AMFFailedProcedureType,
        /**
         * @summary `failureCause`.
         * @public
         * @readonly
         */
        readonly failureCause: AMFFailureCause,
        /**
         * @summary `requestedSlice`.
         * @public
         * @readonly
         */
        readonly requestedSlice: OPTIONAL<NSSAI>,
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: OPTIONAL<SUPI>,
        /**
         * @summary `sUCI`.
         * @public
         * @readonly
         */
        readonly sUCI: OPTIONAL<SUCI>,
        /**
         * @summary `pEI`.
         * @public
         * @readonly
         */
        readonly pEI: OPTIONAL<PEI>,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: OPTIONAL<GPSI>,
        /**
         * @summary `gUTI`.
         * @public
         * @readonly
         */
        readonly gUTI: OPTIONAL<FiveGGUTI>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `additionalUserIdentifiers`.
         * @public
         * @readonly
         */
        readonly additionalUserIdentifiers: OPTIONAL<UserIdentifiers>
    ) {}

    /**
     * @summary Restructures an object into a AMFUnsuccessfulProcedure
     * @description
     * 
     * This takes an `object` and converts it to a `AMFUnsuccessfulProcedure`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFUnsuccessfulProcedure`.
     * @returns {AMFUnsuccessfulProcedure}
     */
    public static _from_object (_o: { [_K in keyof (AMFUnsuccessfulProcedure)]: (AMFUnsuccessfulProcedure)[_K] }): AMFUnsuccessfulProcedure {
        return new AMFUnsuccessfulProcedure(_o.failedProcedureType, _o.failureCause, _o.requestedSlice, _o.sUPI, _o.sUCI, _o.pEI, _o.gPSI, _o.gUTI, _o.location, _o.additionalUserIdentifiers);
    }

        /**
         * @summary The enum used as the type of the component `failedProcedureType`
         * @public
         * @static
         */

    public static _enum_for_failedProcedureType = _enum_for_AMFFailedProcedureType;
}

/**
 * @summary The Leading Root Component Types of AMFUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFUnsuccessfulProcedure: $.ComponentSpec[] = [
    new $.ComponentSpec("failedProcedureType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("failureCause", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("requestedSlice", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sUPI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sUCI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("gUTI", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("additionalUserIdentifiers", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of AMFUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFUnsuccessfulProcedure: $.ASN1Decoder<AMFUnsuccessfulProcedure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFUnsuccessfulProcedure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFUnsuccessfulProcedure (el: _Element): AMFUnsuccessfulProcedure {
    if (!_cached_decoder_for_AMFUnsuccessfulProcedure) { _cached_decoder_for_AMFUnsuccessfulProcedure = function (el: _Element): AMFUnsuccessfulProcedure {
    let failedProcedureType!: AMFFailedProcedureType;
    let failureCause!: AMFFailureCause;
    let requestedSlice: OPTIONAL<NSSAI>;
    let sUPI: OPTIONAL<SUPI>;
    let sUCI: OPTIONAL<SUCI>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let gUTI: OPTIONAL<FiveGGUTI>;
    let location: OPTIONAL<Location>;
    let additionalUserIdentifiers: OPTIONAL<UserIdentifiers>;
    const callbacks: $.DecodingMap = {
        "failedProcedureType": (_el: _Element): void => { failedProcedureType = $._decode_implicit<AMFFailedProcedureType>(() => _decode_AMFFailedProcedureType)(_el); },
        "failureCause": (_el: _Element): void => { failureCause = $._decode_explicit<AMFFailureCause>(() => _decode_AMFFailureCause)(_el); },
        "requestedSlice": (_el: _Element): void => { requestedSlice = $._decode_implicit<NSSAI>(() => _decode_NSSAI)(_el); },
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUCI": (_el: _Element): void => { sUCI = $._decode_implicit<SUCI>(() => _decode_SUCI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<FiveGGUTI>(() => _decode_FiveGGUTI)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "additionalUserIdentifiers": (_el: _Element): void => { additionalUserIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMFUnsuccessfulProcedure,
        _extension_additions_list_spec_for_AMFUnsuccessfulProcedure,
        _root_component_type_list_2_spec_for_AMFUnsuccessfulProcedure,
        undefined,
    );
    return new AMFUnsuccessfulProcedure(
        failedProcedureType,
        failureCause,
        requestedSlice,
        sUPI,
        sUCI,
        pEI,
        gPSI,
        gUTI,
        location,
        additionalUserIdentifiers
    );
}; }
    return _cached_decoder_for_AMFUnsuccessfulProcedure(el);
}

let _cached_encoder_for_AMFUnsuccessfulProcedure: $.ASN1Encoder<AMFUnsuccessfulProcedure> | null = null;

/**
 * @summary Encodes a(n) AMFUnsuccessfulProcedure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFUnsuccessfulProcedure, encoded as an ASN.1 Element.
 */
export
function _encode_AMFUnsuccessfulProcedure (value: AMFUnsuccessfulProcedure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFUnsuccessfulProcedure) { _cached_encoder_for_AMFUnsuccessfulProcedure = function (value: AMFUnsuccessfulProcedure, elGetter: $.ASN1Encoder<AMFUnsuccessfulProcedure>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AMFFailedProcedureType, $.BER)(value.failedProcedureType, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_AMFFailureCause, $.BER)(value.failureCause, $.BER),
            /* IF_ABSENT  */ ((value.requestedSlice === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_NSSAI, $.BER)(value.requestedSlice, $.BER)),
            /* IF_ABSENT  */ ((value.sUPI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_SUPI, $.BER)(value.sUPI, $.BER)),
            /* IF_ABSENT  */ ((value.sUCI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SUCI, $.BER)(value.sUCI, $.BER)),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 7, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* IF_ABSENT  */ ((value.gUTI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_FiveGGUTI, $.BER)(value.gUTI, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.additionalUserIdentifiers === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_UserIdentifiers, $.BER)(value.additionalUserIdentifiers, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AMFUnsuccessfulProcedure(value, elGetter);
}


/* eslint-enable */
