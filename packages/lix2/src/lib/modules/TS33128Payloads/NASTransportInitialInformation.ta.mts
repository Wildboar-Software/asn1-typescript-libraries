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
import { RANUENGAPID, _decode_RANUENGAPID, _encode_RANUENGAPID } from "../TS33128Payloads/RANUENGAPID.ta.mjs";
// export { RANUENGAPID, _decode_RANUENGAPID, _encode_RANUENGAPID } from "../TS33128Payloads/RANUENGAPID.ta.mjs";
import { CellCAGList, _decode_CellCAGList, _encode_CellCAGList } from "../TS33128Payloads/CellCAGList.ta.mjs";
// export { CellCAGList, _decode_CellCAGList, _encode_CellCAGList } from "../TS33128Payloads/CellCAGList.ta.mjs";
import { REDCAPIndication, _enum_for_REDCAPIndication, REDCAPIndication_redCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, redCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_REDCAPIndication, _encode_REDCAPIndication } from "../TS33128Payloads/REDCAPIndication.ta.mjs";
// export { REDCAPIndication, _enum_for_REDCAPIndication, REDCAPIndication_redCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, redCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_REDCAPIndication, _encode_REDCAPIndication } from "../TS33128Payloads/REDCAPIndication.ta.mjs";


/**
 * @summary NASTransportInitialInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NASTransportInitialInformation ::= SEQUENCE
 * {
 *     rANUENGAPID             [1] RANUENGAPID,
 *     iABNodeIndication       [2] BOOLEAN OPTIONAL,
 *     eDTSession              [3] BOOLEAN OPTIONAL,
 *     authenticatedIndication [4] BOOLEAN OPTIONAL,
 *     nPNAccessInformation    [5] CellCAGList OPTIONAL,
 *     rEDCAPIndication        [6] REDCAPIndication OPTIONAL,
 *     mobileIABNodeIndication [7] BOOLEAN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NASTransportInitialInformation {
    constructor (
        /**
         * @summary `rANUENGAPID`.
         * @public
         * @readonly
         */
        readonly rANUENGAPID: RANUENGAPID,
        /**
         * @summary `iABNodeIndication`.
         * @public
         * @readonly
         */
        readonly iABNodeIndication: OPTIONAL<BOOLEAN>,
        /**
         * @summary `eDTSession`.
         * @public
         * @readonly
         */
        readonly eDTSession: OPTIONAL<BOOLEAN>,
        /**
         * @summary `authenticatedIndication`.
         * @public
         * @readonly
         */
        readonly authenticatedIndication: OPTIONAL<BOOLEAN>,
        /**
         * @summary `nPNAccessInformation`.
         * @public
         * @readonly
         */
        readonly nPNAccessInformation: OPTIONAL<CellCAGList>,
        /**
         * @summary `rEDCAPIndication`.
         * @public
         * @readonly
         */
        readonly rEDCAPIndication: OPTIONAL<REDCAPIndication>,
        /**
         * @summary `mobileIABNodeIndication`.
         * @public
         * @readonly
         */
        readonly mobileIABNodeIndication: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a NASTransportInitialInformation
     * @description
     * 
     * This takes an `object` and converts it to a `NASTransportInitialInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NASTransportInitialInformation`.
     * @returns {NASTransportInitialInformation}
     */
    public static _from_object (_o: { [_K in keyof (NASTransportInitialInformation)]: (NASTransportInitialInformation)[_K] }): NASTransportInitialInformation {
        return new NASTransportInitialInformation(_o.rANUENGAPID, _o.iABNodeIndication, _o.eDTSession, _o.authenticatedIndication, _o.nPNAccessInformation, _o.rEDCAPIndication, _o.mobileIABNodeIndication);
    }

        /**
         * @summary The enum used as the type of the component `rEDCAPIndication`
         * @public
         * @static
         */

    public static _enum_for_rEDCAPIndication = _enum_for_REDCAPIndication;
}

/**
 * @summary The Leading Root Component Types of NASTransportInitialInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NASTransportInitialInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("rANUENGAPID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iABNodeIndication", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eDTSession", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("authenticatedIndication", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("nPNAccessInformation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("rEDCAPIndication", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("mobileIABNodeIndication", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of NASTransportInitialInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NASTransportInitialInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NASTransportInitialInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NASTransportInitialInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NASTransportInitialInformation: $.ASN1Decoder<NASTransportInitialInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NASTransportInitialInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NASTransportInitialInformation (el: _Element): NASTransportInitialInformation {
    if (!_cached_decoder_for_NASTransportInitialInformation) { _cached_decoder_for_NASTransportInitialInformation = function (el: _Element): NASTransportInitialInformation {
    let rANUENGAPID!: RANUENGAPID;
    let iABNodeIndication: OPTIONAL<BOOLEAN>;
    let eDTSession: OPTIONAL<BOOLEAN>;
    let authenticatedIndication: OPTIONAL<BOOLEAN>;
    let nPNAccessInformation: OPTIONAL<CellCAGList>;
    let rEDCAPIndication: OPTIONAL<REDCAPIndication>;
    let mobileIABNodeIndication: OPTIONAL<BOOLEAN>;
    const callbacks: $.DecodingMap = {
        "rANUENGAPID": (_el: _Element): void => { rANUENGAPID = $._decode_implicit<RANUENGAPID>(() => _decode_RANUENGAPID)(_el); },
        "iABNodeIndication": (_el: _Element): void => { iABNodeIndication = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "eDTSession": (_el: _Element): void => { eDTSession = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "authenticatedIndication": (_el: _Element): void => { authenticatedIndication = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "nPNAccessInformation": (_el: _Element): void => { nPNAccessInformation = $._decode_implicit<CellCAGList>(() => _decode_CellCAGList)(_el); },
        "rEDCAPIndication": (_el: _Element): void => { rEDCAPIndication = $._decode_implicit<REDCAPIndication>(() => _decode_REDCAPIndication)(_el); },
        "mobileIABNodeIndication": (_el: _Element): void => { mobileIABNodeIndication = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NASTransportInitialInformation,
        _extension_additions_list_spec_for_NASTransportInitialInformation,
        _root_component_type_list_2_spec_for_NASTransportInitialInformation,
        undefined,
    );
    return new NASTransportInitialInformation(
        rANUENGAPID,
        iABNodeIndication,
        eDTSession,
        authenticatedIndication,
        nPNAccessInformation,
        rEDCAPIndication,
        mobileIABNodeIndication
    );
}; }
    return _cached_decoder_for_NASTransportInitialInformation(el);
}

let _cached_encoder_for_NASTransportInitialInformation: $.ASN1Encoder<NASTransportInitialInformation> | null = null;

/**
 * @summary Encodes a(n) NASTransportInitialInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NASTransportInitialInformation, encoded as an ASN.1 Element.
 */
export
function _encode_NASTransportInitialInformation (value: NASTransportInitialInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NASTransportInitialInformation) { _cached_encoder_for_NASTransportInitialInformation = function (value: NASTransportInitialInformation, elGetter: $.ASN1Encoder<NASTransportInitialInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_RANUENGAPID, $.BER)(value.rANUENGAPID, $.BER),
            /* IF_ABSENT  */ ((value.iABNodeIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.iABNodeIndication, $.BER)),
            /* IF_ABSENT  */ ((value.eDTSession === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.eDTSession, $.BER)),
            /* IF_ABSENT  */ ((value.authenticatedIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.authenticatedIndication, $.BER)),
            /* IF_ABSENT  */ ((value.nPNAccessInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CellCAGList, $.BER)(value.nPNAccessInformation, $.BER)),
            /* IF_ABSENT  */ ((value.rEDCAPIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_REDCAPIndication, $.BER)(value.rEDCAPIndication, $.BER)),
            /* IF_ABSENT  */ ((value.mobileIABNodeIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.mobileIABNodeIndication, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NASTransportInitialInformation(value, elGetter);
}


/* eslint-enable */
