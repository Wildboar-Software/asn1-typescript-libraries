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
import { MasterOrShadowAccessPoint, _decode_MasterOrShadowAccessPoint, _encode_MasterOrShadowAccessPoint } from "../DistributedOperations/MasterOrShadowAccessPoint.ta.mjs";
// export { MasterOrShadowAccessPoint, _decode_MasterOrShadowAccessPoint, _encode_MasterOrShadowAccessPoint } from "../DistributedOperations/MasterOrShadowAccessPoint.ta.mjs";
import { MasterAndShadowAccessPoints, _decode_MasterAndShadowAccessPoints, _encode_MasterAndShadowAccessPoints } from "../DistributedOperations/MasterAndShadowAccessPoints.ta.mjs";
// export { MasterAndShadowAccessPoints, _decode_MasterAndShadowAccessPoints, _encode_MasterAndShadowAccessPoints } from "../DistributedOperations/MasterAndShadowAccessPoints.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
import { PresentationAddress, _decode_PresentationAddress, _encode_PresentationAddress } from "../SelectedAttributeTypes/PresentationAddress.ta.mjs";
// export { PresentationAddress, _decode_PresentationAddress, _encode_PresentationAddress } from "../SelectedAttributeTypes/PresentationAddress.ta.mjs";
import { ProtocolInformation, _decode_ProtocolInformation, _encode_ProtocolInformation } from "../SelectedAttributeTypes/ProtocolInformation.ta.mjs";
// export { ProtocolInformation, _decode_ProtocolInformation, _encode_ProtocolInformation } from "../SelectedAttributeTypes/ProtocolInformation.ta.mjs";


/**
 * @summary AccessPointInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessPointInformation ::= SET {
 *   COMPONENTS OF MasterOrShadowAccessPoint,
 *   additionalPoints  [5]  MasterAndShadowAccessPoints OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AccessPointInformation {
    /**
     * @summary `ae_title`.
     * @public
     * @readonly
     */
    readonly ae_title: Name /* REPLICATED_COMPONENT */;
    /**
     * @summary `address`.
     * @public
     * @readonly
     */
    readonly address: PresentationAddress /* REPLICATED_COMPONENT */;
    /**
     * @summary `protocolInformation`.
     * @public
     * @readonly
     */
    readonly protocolInformation: OPTIONAL<ProtocolInformation[]> /* REPLICATED_COMPONENT */;
    /**
     * @summary `chainingRequired`.
     * @public
     * @readonly
     */
    readonly chainingRequired: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */;
    // FIXME: readonly category: PrefixedType
    /**
     * @summary `additionalPoints`.
     * @public
     * @readonly
     */
    readonly additionalPoints: OPTIONAL<MasterAndShadowAccessPoints>;

    constructor (
        ae_title: Name /* REPLICATED_COMPONENT */,
        address: PresentationAddress /* REPLICATED_COMPONENT */,
        protocolInformation: OPTIONAL<ProtocolInformation[]> /* REPLICATED_COMPONENT */,
        chainingRequired: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        additionalPoints: OPTIONAL<MasterAndShadowAccessPoints>
    ) {
        this.ae_title = ae_title;
        this.address = address;
        this.protocolInformation = protocolInformation;
        this.chainingRequired = chainingRequired;
        this.additionalPoints = additionalPoints;
    }

    /**
     * @summary Restructures an object into a AccessPointInformation
     * @description
     * 
     * This takes an `object` and converts it to a `AccessPointInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessPointInformation`.
     * @returns {AccessPointInformation}
     */
    public static _from_object (_o: { [_K in keyof (AccessPointInformation)]: (AccessPointInformation)[_K] }): AccessPointInformation {
        return new AccessPointInformation(_o.ae_title, _o.address, _o.protocolInformation, _o.chainingRequired, _o.additionalPoints);
    }

    /**
     * @summary Getter that returns the default value for `chainingRequired`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_chainingRequired () { return false; }
    /**
     * @summary Getter that returns the default value for `category`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_category () { return /* COULD_NOT_COMPILE_DEFAULT_VALUE category */; }
}

/**
 * @summary The Leading Root Component Types of AccessPointInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AccessPointInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("ae-title", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("address", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("protocolInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("chainingRequired", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("category", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("additionalPoints", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of AccessPointInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AccessPointInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AccessPointInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AccessPointInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AccessPointInformation: $.ASN1Decoder<AccessPointInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessPointInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessPointInformation (el: _Element): AccessPointInformation {
    if (!_cached_decoder_for_AccessPointInformation) { _cached_decoder_for_AccessPointInformation = function (el: _Element): AccessPointInformation {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let ae_title!: Name;
    let address!: PresentationAddress;
    let protocolInformation: OPTIONAL<ProtocolInformation[]>;
    let chainingRequired: OPTIONAL<BOOLEAN> = AccessPointInformation._default_value_for_chainingRequired;
    let category: OPTIONAL</* FIXME: category COULD_NOT_COMPILE_TYPE */> = AccessPointInformation._default_value_for_category;
    let additionalPoints: OPTIONAL<MasterAndShadowAccessPoints>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "ae-title": (_el: _Element): void => { ae_title = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "address": (_el: _Element): void => { address = $._decode_explicit<PresentationAddress>(() => _decode_PresentationAddress)(_el); },
        "protocolInformation": (_el: _Element): void => { protocolInformation = $._decode_explicit<ProtocolInformation[]>(() => $._decodeSetOf<ProtocolInformation>(() => _decode_ProtocolInformation))(_el); },
        "chainingRequired": (_el: _Element): void => { chainingRequired = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "category": (_el: _Element): void => { category = /* FIXME: COULD_NOT_COMPILE_TYPE_DECODER */ },
        "additionalPoints": (_el: _Element): void => { additionalPoints = $._decode_explicit<MasterAndShadowAccessPoints>(() => _decode_MasterAndShadowAccessPoints)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_AccessPointInformation,
        _extension_additions_list_spec_for_AccessPointInformation,
        _root_component_type_list_2_spec_for_AccessPointInformation,
        undefined,
    );
    return new AccessPointInformation( /* SET_CONSTRUCTOR_CALL */
        ae_title,
        address,
        protocolInformation,
        chainingRequired,
        category,
        additionalPoints
    );
}; }
    return _cached_decoder_for_AccessPointInformation(el);
}

let _cached_encoder_for_AccessPointInformation: $.ASN1Encoder<AccessPointInformation> | null = null;

/**
 * @summary Encodes a(n) AccessPointInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessPointInformation, encoded as an ASN.1 Element.
 */
export
function _encode_AccessPointInformation (value: AccessPointInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessPointInformation) { _cached_encoder_for_AccessPointInformation = function (value: AccessPointInformation, elGetter: $.ASN1Encoder<AccessPointInformation>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Name, $.BER)(value.ae_title, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_PresentationAddress, $.BER)(value.address, $.BER));
    if (value.protocolInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => $._encodeSetOf<ProtocolInformation>(() => _encode_ProtocolInformation, $.BER), $.BER)(value.protocolInformation, $.BER));
    }
    if (value.chainingRequired !== undefined && !$.deepEq(value.chainingRequired, AccessPointInformation._default_value_for_chainingRequired)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.chainingRequired, $.BER));
    }
    if (value.category !== undefined && !$.deepEq(value.category, AccessPointInformation._default_value_for_category)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 4, () => $._encodeEnumerated, $.BER)(value.category, $.BER));
    }
    if (value.additionalPoints !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_MasterAndShadowAccessPoints, $.BER)(value.additionalPoints, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_AccessPointInformation(value, elGetter);
}


/* eslint-enable */
