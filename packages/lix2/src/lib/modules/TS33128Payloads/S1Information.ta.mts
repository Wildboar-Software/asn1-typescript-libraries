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
import { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";
// export { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";
import { RANNodeName, _decode_RANNodeName, _encode_RANNodeName } from "../TS33128Payloads/RANNodeName.ta.mjs";
// export { RANNodeName, _decode_RANNodeName, _encode_RANNodeName } from "../TS33128Payloads/RANNodeName.ta.mjs";
import { SupportedTAList, _decode_SupportedTAList, _encode_SupportedTAList } from "../TS33128Payloads/SupportedTAList.ta.mjs";
// export { SupportedTAList, _decode_SupportedTAList, _encode_SupportedTAList } from "../TS33128Payloads/SupportedTAList.ta.mjs";
import { CSGIDList, _decode_CSGIDList, _encode_CSGIDList } from "../TS33128Payloads/CSGIDList.ta.mjs";
// export { CSGIDList, _decode_CSGIDList, _encode_CSGIDList } from "../TS33128Payloads/CSGIDList.ta.mjs";
import { ConnectedENGNBList, _decode_ConnectedENGNBList, _encode_ConnectedENGNBList } from "../TS33128Payloads/ConnectedENGNBList.ta.mjs";
// export { ConnectedENGNBList, _decode_ConnectedENGNBList, _encode_ConnectedENGNBList } from "../TS33128Payloads/ConnectedENGNBList.ta.mjs";
import { MMEServedGUMMEIList, _decode_MMEServedGUMMEIList, _encode_MMEServedGUMMEIList } from "../TS33128Payloads/MMEServedGUMMEIList.ta.mjs";
// export { MMEServedGUMMEIList, _decode_MMEServedGUMMEIList, _encode_MMEServedGUMMEIList } from "../TS33128Payloads/MMEServedGUMMEIList.ta.mjs";


/**
 * @summary S1Information
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * S1Information ::= SEQUENCE
 * {
 *     globalRANNodeID        [1] GlobalRANNodeID,
 *     rANNodeName            [2] RANNodeName OPTIONAL,
 *     supportedTAList        [3] SupportedTAList OPTIONAL,
 *     cSGIDList              [4] CSGIDList OPTIONAL,
 *     connectedENGNBList     [5] ConnectedENGNBList OPTIONAL,
 *     mMEServedGUMMEIList    [6] MMEServedGUMMEIList,
 *     iABSupported           [7] BOOLEAN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class S1Information {
    constructor (
        /**
         * @summary `globalRANNodeID`.
         * @public
         * @readonly
         */
        readonly globalRANNodeID: GlobalRANNodeID,
        /**
         * @summary `rANNodeName`.
         * @public
         * @readonly
         */
        readonly rANNodeName: OPTIONAL<RANNodeName>,
        /**
         * @summary `supportedTAList`.
         * @public
         * @readonly
         */
        readonly supportedTAList: OPTIONAL<SupportedTAList>,
        /**
         * @summary `cSGIDList`.
         * @public
         * @readonly
         */
        readonly cSGIDList: OPTIONAL<CSGIDList>,
        /**
         * @summary `connectedENGNBList`.
         * @public
         * @readonly
         */
        readonly connectedENGNBList: OPTIONAL<ConnectedENGNBList>,
        /**
         * @summary `mMEServedGUMMEIList`.
         * @public
         * @readonly
         */
        readonly mMEServedGUMMEIList: MMEServedGUMMEIList,
        /**
         * @summary `iABSupported`.
         * @public
         * @readonly
         */
        readonly iABSupported: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a S1Information
     * @description
     * 
     * This takes an `object` and converts it to a `S1Information`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `S1Information`.
     * @returns {S1Information}
     */
    public static _from_object (_o: { [_K in keyof (S1Information)]: (S1Information)[_K] }): S1Information {
        return new S1Information(_o.globalRANNodeID, _o.rANNodeName, _o.supportedTAList, _o.cSGIDList, _o.connectedENGNBList, _o.mMEServedGUMMEIList, _o.iABSupported);
    }


}

/**
 * @summary The Leading Root Component Types of S1Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_S1Information: $.ComponentSpec[] = [
    new $.ComponentSpec("globalRANNodeID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rANNodeName", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("supportedTAList", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("cSGIDList", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("connectedENGNBList", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("mMEServedGUMMEIList", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("iABSupported", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of S1Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_S1Information: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of S1Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_S1Information: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_S1Information: $.ASN1Decoder<S1Information> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) S1Information
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_S1Information (el: _Element): S1Information {
    if (!_cached_decoder_for_S1Information) { _cached_decoder_for_S1Information = function (el: _Element): S1Information {
    let globalRANNodeID!: GlobalRANNodeID;
    let rANNodeName: OPTIONAL<RANNodeName>;
    let supportedTAList: OPTIONAL<SupportedTAList>;
    let cSGIDList: OPTIONAL<CSGIDList>;
    let connectedENGNBList: OPTIONAL<ConnectedENGNBList>;
    let mMEServedGUMMEIList!: MMEServedGUMMEIList;
    let iABSupported: OPTIONAL<BOOLEAN>;
    const callbacks: $.DecodingMap = {
        "globalRANNodeID": (_el: _Element): void => { globalRANNodeID = $._decode_implicit<GlobalRANNodeID>(() => _decode_GlobalRANNodeID)(_el); },
        "rANNodeName": (_el: _Element): void => { rANNodeName = $._decode_explicit<RANNodeName>(() => _decode_RANNodeName)(_el); },
        "supportedTAList": (_el: _Element): void => { supportedTAList = $._decode_implicit<SupportedTAList>(() => _decode_SupportedTAList)(_el); },
        "cSGIDList": (_el: _Element): void => { cSGIDList = $._decode_implicit<CSGIDList>(() => _decode_CSGIDList)(_el); },
        "connectedENGNBList": (_el: _Element): void => { connectedENGNBList = $._decode_implicit<ConnectedENGNBList>(() => _decode_ConnectedENGNBList)(_el); },
        "mMEServedGUMMEIList": (_el: _Element): void => { mMEServedGUMMEIList = $._decode_implicit<MMEServedGUMMEIList>(() => _decode_MMEServedGUMMEIList)(_el); },
        "iABSupported": (_el: _Element): void => { iABSupported = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_S1Information,
        _extension_additions_list_spec_for_S1Information,
        _root_component_type_list_2_spec_for_S1Information,
        undefined,
    );
    return new S1Information(
        globalRANNodeID,
        rANNodeName,
        supportedTAList,
        cSGIDList,
        connectedENGNBList,
        mMEServedGUMMEIList,
        iABSupported
    );
}; }
    return _cached_decoder_for_S1Information(el);
}

let _cached_encoder_for_S1Information: $.ASN1Encoder<S1Information> | null = null;

/**
 * @summary Encodes a(n) S1Information into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The S1Information, encoded as an ASN.1 Element.
 */
export
function _encode_S1Information (value: S1Information, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_S1Information) { _cached_encoder_for_S1Information = function (value: S1Information, elGetter: $.ASN1Encoder<S1Information>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GlobalRANNodeID, $.BER)(value.globalRANNodeID, $.BER),
            /* IF_ABSENT  */ ((value.rANNodeName === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_RANNodeName, $.BER)(value.rANNodeName, $.BER)),
            /* IF_ABSENT  */ ((value.supportedTAList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SupportedTAList, $.BER)(value.supportedTAList, $.BER)),
            /* IF_ABSENT  */ ((value.cSGIDList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CSGIDList, $.BER)(value.cSGIDList, $.BER)),
            /* IF_ABSENT  */ ((value.connectedENGNBList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ConnectedENGNBList, $.BER)(value.connectedENGNBList, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_MMEServedGUMMEIList, $.BER)(value.mMEServedGUMMEIList, $.BER),
            /* IF_ABSENT  */ ((value.iABSupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.iABSupported, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_S1Information(value, elGetter);
}


/* eslint-enable */
