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
import { SubscriberIdentity, _decode_SubscriberIdentity, _encode_SubscriberIdentity } from "../MAP-CommonDataTypes/SubscriberIdentity.ta.mjs";
// export { SubscriberIdentity, _decode_SubscriberIdentity, _encode_SubscriberIdentity } from "../MAP-CommonDataTypes/SubscriberIdentity.ta.mjs";
import { LCSLocationInfo, _decode_LCSLocationInfo, _encode_LCSLocationInfo } from "../MAP-LCS-DataTypes/LCSLocationInfo.ta.mjs";
// export { LCSLocationInfo, _decode_LCSLocationInfo, _encode_LCSLocationInfo } from "../MAP-LCS-DataTypes/LCSLocationInfo.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";
// export { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";


/**
 * @summary RoutingInfoForLCS_Res
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoutingInfoForLCS-Res ::= SEQUENCE {
 *     targetMS    [0] SubscriberIdentity,
 *     lcsLocationInfo    [1] LCSLocationInfo,
 *     extensionContainer    [2] ExtensionContainer    OPTIONAL,
 *     ...,
 *     v-gmlc-Address    [3]    GSN-Address    OPTIONAL,
 *     h-gmlc-Address    [4]    GSN-Address    OPTIONAL,
 *     ppr-Address    [5]    GSN-Address    OPTIONAL,
 *     additional-v-gmlc-Address    [6]    GSN-Address    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RoutingInfoForLCS_Res {
    constructor (
        /**
         * @summary `targetMS`.
         * @public
         * @readonly
         */
        readonly targetMS: SubscriberIdentity,
        /**
         * @summary `lcsLocationInfo`.
         * @public
         * @readonly
         */
        readonly lcsLocationInfo: LCSLocationInfo,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `v_gmlc_Address`.
         * @public
         * @readonly
         */
        readonly v_gmlc_Address: OPTIONAL<GSN_Address>,
        /**
         * @summary `h_gmlc_Address`.
         * @public
         * @readonly
         */
        readonly h_gmlc_Address: OPTIONAL<GSN_Address>,
        /**
         * @summary `ppr_Address`.
         * @public
         * @readonly
         */
        readonly ppr_Address: OPTIONAL<GSN_Address>,
        /**
         * @summary `additional_v_gmlc_Address`.
         * @public
         * @readonly
         */
        readonly additional_v_gmlc_Address: OPTIONAL<GSN_Address>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RoutingInfoForLCS_Res
     * @description
     * 
     * This takes an `object` and converts it to a `RoutingInfoForLCS_Res`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RoutingInfoForLCS_Res`.
     * @returns {RoutingInfoForLCS_Res}
     */
    public static _from_object (_o: { [_K in keyof (RoutingInfoForLCS_Res)]: (RoutingInfoForLCS_Res)[_K] }): RoutingInfoForLCS_Res {
        return new RoutingInfoForLCS_Res(_o.targetMS, _o.lcsLocationInfo, _o.extensionContainer, _o.v_gmlc_Address, _o.h_gmlc_Address, _o.ppr_Address, _o.additional_v_gmlc_Address, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RoutingInfoForLCS_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RoutingInfoForLCS_Res: $.ComponentSpec[] = [
    new $.ComponentSpec("targetMS", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("lcsLocationInfo", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RoutingInfoForLCS_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RoutingInfoForLCS_Res: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RoutingInfoForLCS_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RoutingInfoForLCS_Res: $.ComponentSpec[] = [
    new $.ComponentSpec("v-gmlc-Address", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("h-gmlc-Address", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("ppr-Address", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("additional-v-gmlc-Address", true, $.hasTag(_TagClass.context, 6), undefined, undefined)
];

let _cached_decoder_for_RoutingInfoForLCS_Res: $.ASN1Decoder<RoutingInfoForLCS_Res> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoutingInfoForLCS_Res
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoutingInfoForLCS_Res (el: _Element): RoutingInfoForLCS_Res {
    if (!_cached_decoder_for_RoutingInfoForLCS_Res) { _cached_decoder_for_RoutingInfoForLCS_Res = function (el: _Element): RoutingInfoForLCS_Res {
    let targetMS!: SubscriberIdentity;
    let lcsLocationInfo!: LCSLocationInfo;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let v_gmlc_Address: OPTIONAL<GSN_Address>;
    let h_gmlc_Address: OPTIONAL<GSN_Address>;
    let ppr_Address: OPTIONAL<GSN_Address>;
    let additional_v_gmlc_Address: OPTIONAL<GSN_Address>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "targetMS": (_el: _Element): void => { targetMS = $._decode_explicit<SubscriberIdentity>(() => _decode_SubscriberIdentity)(_el); },
        "lcsLocationInfo": (_el: _Element): void => { lcsLocationInfo = $._decode_implicit<LCSLocationInfo>(() => _decode_LCSLocationInfo)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "v-gmlc-Address": (_el: _Element): void => { v_gmlc_Address = $._decode_implicit<GSN_Address>(() => _decode_GSN_Address)(_el); },
        "h-gmlc-Address": (_el: _Element): void => { h_gmlc_Address = $._decode_implicit<GSN_Address>(() => _decode_GSN_Address)(_el); },
        "ppr-Address": (_el: _Element): void => { ppr_Address = $._decode_implicit<GSN_Address>(() => _decode_GSN_Address)(_el); },
        "additional-v-gmlc-Address": (_el: _Element): void => { additional_v_gmlc_Address = $._decode_implicit<GSN_Address>(() => _decode_GSN_Address)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RoutingInfoForLCS_Res,
        _extension_additions_list_spec_for_RoutingInfoForLCS_Res,
        _root_component_type_list_2_spec_for_RoutingInfoForLCS_Res,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RoutingInfoForLCS_Res(
        targetMS,
        lcsLocationInfo,
        extensionContainer,
        v_gmlc_Address,
        h_gmlc_Address,
        ppr_Address,
        additional_v_gmlc_Address,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RoutingInfoForLCS_Res(el);
}

let _cached_encoder_for_RoutingInfoForLCS_Res: $.ASN1Encoder<RoutingInfoForLCS_Res> | null = null;

/**
 * @summary Encodes a(n) RoutingInfoForLCS_Res into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoutingInfoForLCS_Res, encoded as an ASN.1 Element.
 */
export
function _encode_RoutingInfoForLCS_Res (value: RoutingInfoForLCS_Res, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoutingInfoForLCS_Res) { _cached_encoder_for_RoutingInfoForLCS_Res = function (value: RoutingInfoForLCS_Res, elGetter: $.ASN1Encoder<RoutingInfoForLCS_Res>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_SubscriberIdentity, $.BER)(value.targetMS, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LCSLocationInfo, $.BER)(value.lcsLocationInfo, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.v_gmlc_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_GSN_Address, $.BER)(value.v_gmlc_Address, $.BER)),
            /* IF_ABSENT  */ ((value.h_gmlc_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_GSN_Address, $.BER)(value.h_gmlc_Address, $.BER)),
            /* IF_ABSENT  */ ((value.ppr_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_GSN_Address, $.BER)(value.ppr_Address, $.BER)),
            /* IF_ABSENT  */ ((value.additional_v_gmlc_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_GSN_Address, $.BER)(value.additional_v_gmlc_Address, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RoutingInfoForLCS_Res(value, elGetter);
}


/* eslint-enable */
