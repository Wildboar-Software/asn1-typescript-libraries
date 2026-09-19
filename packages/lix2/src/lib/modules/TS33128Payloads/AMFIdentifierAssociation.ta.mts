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
import { TAIList, _decode_TAIList, _encode_TAIList } from "../TS33128Payloads/TAIList.ta.mjs";
// export { TAIList, _decode_TAIList, _encode_TAIList } from "../TS33128Payloads/TAIList.ta.mjs";
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";


/**
 * @summary AMFIdentifierAssociation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFIdentifierAssociation ::= SEQUENCE
 * {
 *     sUPI                      [1] SUPI,
 *     sUCI                      [2] SUCI OPTIONAL,
 *     pEI                       [3] PEI OPTIONAL,
 *     gPSI                      [4] GPSI OPTIONAL,
 *     gUTI                      [5] FiveGGUTI,
 *     location                  [6] Location,
 *     fiveGSTAIList             [7] TAIList OPTIONAL,
 *     additionalUserIdentifiers [8] UserIdentifiers OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AMFIdentifierAssociation {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
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
        readonly gUTI: FiveGGUTI,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: Location,
        /**
         * @summary `fiveGSTAIList`.
         * @public
         * @readonly
         */
        readonly fiveGSTAIList: OPTIONAL<TAIList>,
        /**
         * @summary `additionalUserIdentifiers`.
         * @public
         * @readonly
         */
        readonly additionalUserIdentifiers: OPTIONAL<UserIdentifiers>
    ) {}

    /**
     * @summary Restructures an object into a AMFIdentifierAssociation
     * @description
     * 
     * This takes an `object` and converts it to a `AMFIdentifierAssociation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFIdentifierAssociation`.
     * @returns {AMFIdentifierAssociation}
     */
    public static _from_object (_o: { [_K in keyof (AMFIdentifierAssociation)]: (AMFIdentifierAssociation)[_K] }): AMFIdentifierAssociation {
        return new AMFIdentifierAssociation(_o.sUPI, _o.sUCI, _o.pEI, _o.gPSI, _o.gUTI, _o.location, _o.fiveGSTAIList, _o.additionalUserIdentifiers);
    }


}

/**
 * @summary The Leading Root Component Types of AMFIdentifierAssociation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFIdentifierAssociation: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sUCI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("gUTI", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("location", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("fiveGSTAIList", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("additionalUserIdentifiers", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of AMFIdentifierAssociation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFIdentifierAssociation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFIdentifierAssociation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFIdentifierAssociation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFIdentifierAssociation: $.ASN1Decoder<AMFIdentifierAssociation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFIdentifierAssociation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFIdentifierAssociation (el: _Element): AMFIdentifierAssociation {
    if (!_cached_decoder_for_AMFIdentifierAssociation) { _cached_decoder_for_AMFIdentifierAssociation = function (el: _Element): AMFIdentifierAssociation {
    let sUPI!: SUPI;
    let sUCI: OPTIONAL<SUCI>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let gUTI!: FiveGGUTI;
    let location!: Location;
    let fiveGSTAIList: OPTIONAL<TAIList>;
    let additionalUserIdentifiers: OPTIONAL<UserIdentifiers>;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUCI": (_el: _Element): void => { sUCI = $._decode_implicit<SUCI>(() => _decode_SUCI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<FiveGGUTI>(() => _decode_FiveGGUTI)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "fiveGSTAIList": (_el: _Element): void => { fiveGSTAIList = $._decode_implicit<TAIList>(() => _decode_TAIList)(_el); },
        "additionalUserIdentifiers": (_el: _Element): void => { additionalUserIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMFIdentifierAssociation,
        _extension_additions_list_spec_for_AMFIdentifierAssociation,
        _root_component_type_list_2_spec_for_AMFIdentifierAssociation,
        undefined,
    );
    return new AMFIdentifierAssociation(
        sUPI,
        sUCI,
        pEI,
        gPSI,
        gUTI,
        location,
        fiveGSTAIList,
        additionalUserIdentifiers
    );
}; }
    return _cached_decoder_for_AMFIdentifierAssociation(el);
}

let _cached_encoder_for_AMFIdentifierAssociation: $.ASN1Encoder<AMFIdentifierAssociation> | null = null;

/**
 * @summary Encodes a(n) AMFIdentifierAssociation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFIdentifierAssociation, encoded as an ASN.1 Element.
 */
export
function _encode_AMFIdentifierAssociation (value: AMFIdentifierAssociation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFIdentifierAssociation) { _cached_encoder_for_AMFIdentifierAssociation = function (value: AMFIdentifierAssociation, elGetter: $.ASN1Encoder<AMFIdentifierAssociation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* IF_ABSENT  */ ((value.sUCI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SUCI, $.BER)(value.sUCI, $.BER)),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_FiveGGUTI, $.BER)(value.gUTI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_Location, $.BER)(value.location, $.BER),
            /* IF_ABSENT  */ ((value.fiveGSTAIList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_TAIList, $.BER)(value.fiveGSTAIList, $.BER)),
            /* IF_ABSENT  */ ((value.additionalUserIdentifiers === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_UserIdentifiers, $.BER)(value.additionalUserIdentifiers, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AMFIdentifierAssociation(value, elGetter);
}


/* eslint-enable */
