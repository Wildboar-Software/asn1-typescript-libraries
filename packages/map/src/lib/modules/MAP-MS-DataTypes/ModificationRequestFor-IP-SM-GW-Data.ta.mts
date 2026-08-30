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
import { ModificationInstruction, _enum_for_ModificationInstruction, ModificationInstruction_deactivate /* IMPORTED_LONG_ENUMERATION_ITEM */, deactivate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModificationInstruction_activate /* IMPORTED_LONG_ENUMERATION_ITEM */, activate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ModificationInstruction, _encode_ModificationInstruction } from "../MAP-MS-DataTypes/ModificationInstruction.ta.mjs";
// export { ModificationInstruction, _enum_for_ModificationInstruction, ModificationInstruction_deactivate /* IMPORTED_LONG_ENUMERATION_ITEM */, deactivate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModificationInstruction_activate /* IMPORTED_LONG_ENUMERATION_ITEM */, activate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ModificationInstruction, _encode_ModificationInstruction } from "../MAP-MS-DataTypes/ModificationInstruction.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { NetworkNodeDiameterAddress, _decode_NetworkNodeDiameterAddress, _encode_NetworkNodeDiameterAddress } from "../MAP-CommonDataTypes/NetworkNodeDiameterAddress.ta.mjs";
// export { NetworkNodeDiameterAddress, _decode_NetworkNodeDiameterAddress, _encode_NetworkNodeDiameterAddress } from "../MAP-CommonDataTypes/NetworkNodeDiameterAddress.ta.mjs";


/**
 * @summary ModificationRequestFor_IP_SM_GW_Data
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModificationRequestFor-IP-SM-GW-Data ::= SEQUENCE {
 *     modifyRegistrationStatus    [0]    ModificationInstruction    OPTIONAL,
 *     extensionContainer    [1]    ExtensionContainer    OPTIONAL,
 *     ...,
 *     ip-sm-gw-DiameterAddress    [2]    NetworkNodeDiameterAddress    OPTIONAL
 *     -- ip-sm-gw-DiameterAddress may be present when ModificationInstruction is "activate"
 *     }
 * ```
 * 
 * @class
 */
export
class ModificationRequestFor_IP_SM_GW_Data {
    constructor (
        /**
         * @summary `modifyRegistrationStatus`.
         * @public
         * @readonly
         */
        readonly modifyRegistrationStatus: OPTIONAL<ModificationInstruction>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `ip_sm_gw_DiameterAddress`.
         * @public
         * @readonly
         */
        readonly ip_sm_gw_DiameterAddress: OPTIONAL<NetworkNodeDiameterAddress>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ModificationRequestFor_IP_SM_GW_Data
     * @description
     * 
     * This takes an `object` and converts it to a `ModificationRequestFor_IP_SM_GW_Data`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModificationRequestFor_IP_SM_GW_Data`.
     * @returns {ModificationRequestFor_IP_SM_GW_Data}
     */
    public static _from_object (_o: { [_K in keyof (ModificationRequestFor_IP_SM_GW_Data)]: (ModificationRequestFor_IP_SM_GW_Data)[_K] }): ModificationRequestFor_IP_SM_GW_Data {
        return new ModificationRequestFor_IP_SM_GW_Data(_o.modifyRegistrationStatus, _o.extensionContainer, _o.ip_sm_gw_DiameterAddress, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `modifyRegistrationStatus`
         * @public
         * @static
         */

    public static _enum_for_modifyRegistrationStatus = _enum_for_ModificationInstruction;
}

/**
 * @summary The Leading Root Component Types of ModificationRequestFor_IP_SM_GW_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ModificationRequestFor_IP_SM_GW_Data: $.ComponentSpec[] = [
    new $.ComponentSpec("modifyRegistrationStatus", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ModificationRequestFor_IP_SM_GW_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ModificationRequestFor_IP_SM_GW_Data: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ModificationRequestFor_IP_SM_GW_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ModificationRequestFor_IP_SM_GW_Data: $.ComponentSpec[] = [
    new $.ComponentSpec("ip-sm-gw-DiameterAddress", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

let _cached_decoder_for_ModificationRequestFor_IP_SM_GW_Data: $.ASN1Decoder<ModificationRequestFor_IP_SM_GW_Data> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModificationRequestFor_IP_SM_GW_Data
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModificationRequestFor_IP_SM_GW_Data (el: _Element): ModificationRequestFor_IP_SM_GW_Data {
    if (!_cached_decoder_for_ModificationRequestFor_IP_SM_GW_Data) { _cached_decoder_for_ModificationRequestFor_IP_SM_GW_Data = function (el: _Element): ModificationRequestFor_IP_SM_GW_Data {
    let modifyRegistrationStatus: OPTIONAL<ModificationInstruction>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let ip_sm_gw_DiameterAddress: OPTIONAL<NetworkNodeDiameterAddress>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "modifyRegistrationStatus": (_el: _Element): void => { modifyRegistrationStatus = $._decode_implicit<ModificationInstruction>(() => _decode_ModificationInstruction)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "ip-sm-gw-DiameterAddress": (_el: _Element): void => { ip_sm_gw_DiameterAddress = $._decode_implicit<NetworkNodeDiameterAddress>(() => _decode_NetworkNodeDiameterAddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ModificationRequestFor_IP_SM_GW_Data,
        _extension_additions_list_spec_for_ModificationRequestFor_IP_SM_GW_Data,
        _root_component_type_list_2_spec_for_ModificationRequestFor_IP_SM_GW_Data,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ModificationRequestFor_IP_SM_GW_Data(
        modifyRegistrationStatus,
        extensionContainer,
        ip_sm_gw_DiameterAddress,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ModificationRequestFor_IP_SM_GW_Data(el);
}

let _cached_encoder_for_ModificationRequestFor_IP_SM_GW_Data: $.ASN1Encoder<ModificationRequestFor_IP_SM_GW_Data> | null = null;

/**
 * @summary Encodes a(n) ModificationRequestFor_IP_SM_GW_Data into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModificationRequestFor_IP_SM_GW_Data, encoded as an ASN.1 Element.
 */
export
function _encode_ModificationRequestFor_IP_SM_GW_Data (value: ModificationRequestFor_IP_SM_GW_Data, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModificationRequestFor_IP_SM_GW_Data) { _cached_encoder_for_ModificationRequestFor_IP_SM_GW_Data = function (value: ModificationRequestFor_IP_SM_GW_Data, elGetter: $.ASN1Encoder<ModificationRequestFor_IP_SM_GW_Data>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.modifyRegistrationStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ModificationInstruction, $.BER)(value.modifyRegistrationStatus, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.ip_sm_gw_DiameterAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_NetworkNodeDiameterAddress, $.BER)(value.ip_sm_gw_DiameterAddress, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ModificationRequestFor_IP_SM_GW_Data(value, elGetter);
}


/* eslint-enable */
