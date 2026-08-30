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
import { MobilityTriggers, _decode_MobilityTriggers, _encode_MobilityTriggers } from "../MAP-MS-DataTypes/MobilityTriggers.ta.mjs";
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../MAP-MS-DataTypes/ServiceKey.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary MG_CSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MG-CSI ::= SEQUENCE {
 *     mobilityTriggers    MobilityTriggers,
 *     serviceKey    ServiceKey,
 *     gsmSCF-Address    [0]    ISDN-AddressString,
 *     extensionContainer    [1]    ExtensionContainer    OPTIONAL,
 *     notificationToCSE    [2] NULL    OPTIONAL,
 *     csi-Active    [3] NULL    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class MG_CSI {
    constructor (
        /**
         * @summary `mobilityTriggers`.
         * @public
         * @readonly
         */
        readonly mobilityTriggers: MobilityTriggers,
        /**
         * @summary `serviceKey`.
         * @public
         * @readonly
         */
        readonly serviceKey: ServiceKey,
        /**
         * @summary `gsmSCF_Address`.
         * @public
         * @readonly
         */
        readonly gsmSCF_Address: ISDN_AddressString,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `notificationToCSE`.
         * @public
         * @readonly
         */
        readonly notificationToCSE: OPTIONAL<NULL>,
        /**
         * @summary `csi_Active`.
         * @public
         * @readonly
         */
        readonly csi_Active: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MG_CSI
     * @description
     * 
     * This takes an `object` and converts it to a `MG_CSI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MG_CSI`.
     * @returns {MG_CSI}
     */
    public static _from_object (_o: { [_K in keyof (MG_CSI)]: (MG_CSI)[_K] }): MG_CSI {
        return new MG_CSI(_o.mobilityTriggers, _o.serviceKey, _o.gsmSCF_Address, _o.extensionContainer, _o.notificationToCSE, _o.csi_Active, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MG_CSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MG_CSI: $.ComponentSpec[] = [
    new $.ComponentSpec("mobilityTriggers", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("gsmSCF-Address", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("notificationToCSE", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("csi-Active", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of MG_CSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MG_CSI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MG_CSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MG_CSI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MG_CSI: $.ASN1Decoder<MG_CSI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MG_CSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MG_CSI (el: _Element): MG_CSI {
    if (!_cached_decoder_for_MG_CSI) { _cached_decoder_for_MG_CSI = function (el: _Element): MG_CSI {
    let mobilityTriggers!: MobilityTriggers;
    let serviceKey!: ServiceKey;
    let gsmSCF_Address!: ISDN_AddressString;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let notificationToCSE: OPTIONAL<NULL> = undefined;
    let csi_Active: OPTIONAL<NULL> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "mobilityTriggers": (_el: _Element): void => { mobilityTriggers = _decode_MobilityTriggers(_el); },
        "serviceKey": (_el: _Element): void => { serviceKey = _decode_ServiceKey(_el); },
        "gsmSCF-Address": (_el: _Element): void => { gsmSCF_Address = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "notificationToCSE": (_el: _Element): void => { notificationToCSE = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "csi-Active": (_el: _Element): void => { csi_Active = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MG_CSI,
        _extension_additions_list_spec_for_MG_CSI,
        _root_component_type_list_2_spec_for_MG_CSI,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MG_CSI(
        mobilityTriggers,
        serviceKey,
        gsmSCF_Address,
        extensionContainer,
        notificationToCSE,
        csi_Active,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MG_CSI(el);
}

let _cached_encoder_for_MG_CSI: $.ASN1Encoder<MG_CSI> | null = null;

/**
 * @summary Encodes a(n) MG_CSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MG_CSI, encoded as an ASN.1 Element.
 */
export
function _encode_MG_CSI (value: MG_CSI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MG_CSI) { _cached_encoder_for_MG_CSI = function (value: MG_CSI, elGetter: $.ASN1Encoder<MG_CSI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MobilityTriggers(value.mobilityTriggers, $.BER),
            /* REQUIRED   */ _encode_ServiceKey(value.serviceKey, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ISDN_AddressString, $.BER)(value.gsmSCF_Address, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER)),
            /* IF_ABSENT  */ ((value.notificationToCSE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.notificationToCSE, $.BER)),
            /* IF_ABSENT  */ ((value.csi_Active === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.csi_Active, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MG_CSI(value, elGetter);
}


/* eslint-enable */
