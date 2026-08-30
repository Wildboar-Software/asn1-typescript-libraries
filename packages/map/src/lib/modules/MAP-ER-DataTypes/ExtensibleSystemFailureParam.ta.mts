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
import { NetworkResource, _enum_for_NetworkResource, NetworkResource_plmn /* IMPORTED_LONG_ENUMERATION_ITEM */, plmn /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_hlr /* IMPORTED_LONG_ENUMERATION_ITEM */, hlr /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_vlr /* IMPORTED_LONG_ENUMERATION_ITEM */, vlr /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_pvlr /* IMPORTED_LONG_ENUMERATION_ITEM */, pvlr /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_controllingMSC /* IMPORTED_LONG_ENUMERATION_ITEM */, controllingMSC /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_vmsc /* IMPORTED_LONG_ENUMERATION_ITEM */, vmsc /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_eir /* IMPORTED_LONG_ENUMERATION_ITEM */, eir /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_rss /* IMPORTED_LONG_ENUMERATION_ITEM */, rss /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NetworkResource, _encode_NetworkResource } from "../MAP-CommonDataTypes/NetworkResource.ta.mjs";
// export { NetworkResource, _enum_for_NetworkResource, NetworkResource_plmn /* IMPORTED_LONG_ENUMERATION_ITEM */, plmn /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_hlr /* IMPORTED_LONG_ENUMERATION_ITEM */, hlr /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_vlr /* IMPORTED_LONG_ENUMERATION_ITEM */, vlr /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_pvlr /* IMPORTED_LONG_ENUMERATION_ITEM */, pvlr /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_controllingMSC /* IMPORTED_LONG_ENUMERATION_ITEM */, controllingMSC /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_vmsc /* IMPORTED_LONG_ENUMERATION_ITEM */, vmsc /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_eir /* IMPORTED_LONG_ENUMERATION_ITEM */, eir /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkResource_rss /* IMPORTED_LONG_ENUMERATION_ITEM */, rss /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NetworkResource, _encode_NetworkResource } from "../MAP-CommonDataTypes/NetworkResource.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { AdditionalNetworkResource, _enum_for_AdditionalNetworkResource, AdditionalNetworkResource_sgsn /* IMPORTED_LONG_ENUMERATION_ITEM */, sgsn /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalNetworkResource_ggsn /* IMPORTED_LONG_ENUMERATION_ITEM */, ggsn /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalNetworkResource_gmlc /* IMPORTED_LONG_ENUMERATION_ITEM */, gmlc /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalNetworkResource_gsmSCF /* IMPORTED_LONG_ENUMERATION_ITEM */, gsmSCF /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalNetworkResource_nplr /* IMPORTED_LONG_ENUMERATION_ITEM */, nplr /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalNetworkResource_auc /* IMPORTED_LONG_ENUMERATION_ITEM */, auc /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalNetworkResource_ue /* IMPORTED_LONG_ENUMERATION_ITEM */, ue /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalNetworkResource_mme /* IMPORTED_LONG_ENUMERATION_ITEM */, mme /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AdditionalNetworkResource, _encode_AdditionalNetworkResource } from "../MAP-CommonDataTypes/AdditionalNetworkResource.ta.mjs";
// export { AdditionalNetworkResource, _enum_for_AdditionalNetworkResource, AdditionalNetworkResource_sgsn /* IMPORTED_LONG_ENUMERATION_ITEM */, sgsn /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalNetworkResource_ggsn /* IMPORTED_LONG_ENUMERATION_ITEM */, ggsn /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalNetworkResource_gmlc /* IMPORTED_LONG_ENUMERATION_ITEM */, gmlc /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalNetworkResource_gsmSCF /* IMPORTED_LONG_ENUMERATION_ITEM */, gsmSCF /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalNetworkResource_nplr /* IMPORTED_LONG_ENUMERATION_ITEM */, nplr /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalNetworkResource_auc /* IMPORTED_LONG_ENUMERATION_ITEM */, auc /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalNetworkResource_ue /* IMPORTED_LONG_ENUMERATION_ITEM */, ue /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdditionalNetworkResource_mme /* IMPORTED_LONG_ENUMERATION_ITEM */, mme /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AdditionalNetworkResource, _encode_AdditionalNetworkResource } from "../MAP-CommonDataTypes/AdditionalNetworkResource.ta.mjs";
import { FailureCauseParam, _enum_for_FailureCauseParam, FailureCauseParam_limitReachedOnNumberOfConcurrentLocationRequests /* IMPORTED_LONG_ENUMERATION_ITEM */, limitReachedOnNumberOfConcurrentLocationRequests /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FailureCauseParam, _encode_FailureCauseParam } from "../MAP-ER-DataTypes/FailureCauseParam.ta.mjs";
// export { FailureCauseParam, _enum_for_FailureCauseParam, FailureCauseParam_limitReachedOnNumberOfConcurrentLocationRequests /* IMPORTED_LONG_ENUMERATION_ITEM */, limitReachedOnNumberOfConcurrentLocationRequests /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FailureCauseParam, _encode_FailureCauseParam } from "../MAP-ER-DataTypes/FailureCauseParam.ta.mjs";


/**
 * @summary ExtensibleSystemFailureParam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensibleSystemFailureParam ::= SEQUENCE {
 *     networkResource    NetworkResource    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     additionalNetworkResource    [0] AdditionalNetworkResource    OPTIONAL,
 *     failureCauseParam    [1] FailureCauseParam    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ExtensibleSystemFailureParam {
    constructor (
        /**
         * @summary `networkResource`.
         * @public
         * @readonly
         */
        readonly networkResource: OPTIONAL<NetworkResource>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `additionalNetworkResource`.
         * @public
         * @readonly
         */
        readonly additionalNetworkResource: OPTIONAL<AdditionalNetworkResource>,
        /**
         * @summary `failureCauseParam`.
         * @public
         * @readonly
         */
        readonly failureCauseParam: OPTIONAL<FailureCauseParam>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ExtensibleSystemFailureParam
     * @description
     * 
     * This takes an `object` and converts it to a `ExtensibleSystemFailureParam`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtensibleSystemFailureParam`.
     * @returns {ExtensibleSystemFailureParam}
     */
    public static _from_object (_o: { [_K in keyof (ExtensibleSystemFailureParam)]: (ExtensibleSystemFailureParam)[_K] }): ExtensibleSystemFailureParam {
        return new ExtensibleSystemFailureParam(_o.networkResource, _o.extensionContainer, _o.additionalNetworkResource, _o.failureCauseParam, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `networkResource`
         * @public
         * @static
         */

    public static _enum_for_networkResource = _enum_for_NetworkResource;        /**
         * @summary The enum used as the type of the component `additionalNetworkResource`
         * @public
         * @static
         */

    public static _enum_for_additionalNetworkResource = _enum_for_AdditionalNetworkResource;        /**
         * @summary The enum used as the type of the component `failureCauseParam`
         * @public
         * @static
         */

    public static _enum_for_failureCauseParam = _enum_for_FailureCauseParam;
}

/**
 * @summary The Leading Root Component Types of ExtensibleSystemFailureParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExtensibleSystemFailureParam: $.ComponentSpec[] = [
    new $.ComponentSpec("networkResource", true, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ExtensibleSystemFailureParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExtensibleSystemFailureParam: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExtensibleSystemFailureParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExtensibleSystemFailureParam: $.ComponentSpec[] = [
    new $.ComponentSpec("additionalNetworkResource", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("failureCauseParam", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

let _cached_decoder_for_ExtensibleSystemFailureParam: $.ASN1Decoder<ExtensibleSystemFailureParam> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtensibleSystemFailureParam
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtensibleSystemFailureParam (el: _Element): ExtensibleSystemFailureParam {
    if (!_cached_decoder_for_ExtensibleSystemFailureParam) { _cached_decoder_for_ExtensibleSystemFailureParam = function (el: _Element): ExtensibleSystemFailureParam {
    let networkResource: OPTIONAL<NetworkResource>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let additionalNetworkResource: OPTIONAL<AdditionalNetworkResource>;
    let failureCauseParam: OPTIONAL<FailureCauseParam>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "networkResource": (_el: _Element): void => { networkResource = _decode_NetworkResource(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "additionalNetworkResource": (_el: _Element): void => { additionalNetworkResource = $._decode_implicit<AdditionalNetworkResource>(() => _decode_AdditionalNetworkResource)(_el); },
        "failureCauseParam": (_el: _Element): void => { failureCauseParam = $._decode_implicit<FailureCauseParam>(() => _decode_FailureCauseParam)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExtensibleSystemFailureParam,
        _extension_additions_list_spec_for_ExtensibleSystemFailureParam,
        _root_component_type_list_2_spec_for_ExtensibleSystemFailureParam,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ExtensibleSystemFailureParam(
        networkResource,
        extensionContainer,
        additionalNetworkResource,
        failureCauseParam,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ExtensibleSystemFailureParam(el);
}

let _cached_encoder_for_ExtensibleSystemFailureParam: $.ASN1Encoder<ExtensibleSystemFailureParam> | null = null;

/**
 * @summary Encodes a(n) ExtensibleSystemFailureParam into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensibleSystemFailureParam, encoded as an ASN.1 Element.
 */
export
function _encode_ExtensibleSystemFailureParam (value: ExtensibleSystemFailureParam, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtensibleSystemFailureParam) { _cached_encoder_for_ExtensibleSystemFailureParam = function (value: ExtensibleSystemFailureParam, elGetter: $.ASN1Encoder<ExtensibleSystemFailureParam>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.networkResource === undefined) ? undefined : _encode_NetworkResource(value.networkResource, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.additionalNetworkResource === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AdditionalNetworkResource, $.BER)(value.additionalNetworkResource, $.BER)),
            /* IF_ABSENT  */ ((value.failureCauseParam === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_FailureCauseParam, $.BER)(value.failureCauseParam, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ExtensibleSystemFailureParam(value, elGetter);
}


/* eslint-enable */
