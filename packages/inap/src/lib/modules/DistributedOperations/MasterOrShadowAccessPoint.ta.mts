/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
import { PresentationAddress, _decode_PresentationAddress, _encode_PresentationAddress } from "../SelectedAttributeTypes/PresentationAddress.ta.mjs";
// export { PresentationAddress, _decode_PresentationAddress, _encode_PresentationAddress } from "../SelectedAttributeTypes/PresentationAddress.ta.mjs";
import { ProtocolInformation, _decode_ProtocolInformation, _encode_ProtocolInformation } from "../SelectedAttributeTypes/ProtocolInformation.ta.mjs";
// export { ProtocolInformation, _decode_ProtocolInformation, _encode_ProtocolInformation } from "../SelectedAttributeTypes/ProtocolInformation.ta.mjs";
import { MasterOrShadowAccessPoint_category, MasterOrShadowAccessPoint_category_master /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_MasterOrShadowAccessPoint_category, _encode_MasterOrShadowAccessPoint_category, _enum_for_MasterOrShadowAccessPoint_category } from "../DistributedOperations/MasterOrShadowAccessPoint-category.ta.mjs";
// export { MasterOrShadowAccessPoint_category, _enum_for_MasterOrShadowAccessPoint_category, MasterOrShadowAccessPoint_category_master /* IMPORTED_LONG_ENUMERATION_ITEM */, master /* IMPORTED_SHORT_ENUMERATION_ITEM */, MasterOrShadowAccessPoint_category_shadow /* IMPORTED_LONG_ENUMERATION_ITEM */, shadow /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MasterOrShadowAccessPoint_category, _encode_MasterOrShadowAccessPoint_category } from "../DistributedOperations/MasterOrShadowAccessPoint-category.ta.mjs";


/**
 * @summary MasterOrShadowAccessPoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MasterOrShadowAccessPoint ::= SET {
 *   COMPONENTS OF AccessPoint,
 *   category  [4]  ENUMERATED {master(0), shadow(1)} DEFAULT master
 * }
 * ```
 * 
 * @class
 */
export
class MasterOrShadowAccessPoint {
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
    /**
     * @summary `category`.
     * @public
     * @readonly
     */
    readonly category: OPTIONAL<MasterOrShadowAccessPoint_category>;

    constructor (
        ae_title: Name /* REPLICATED_COMPONENT */,
        address: PresentationAddress /* REPLICATED_COMPONENT */,
        protocolInformation: OPTIONAL<ProtocolInformation[]> /* REPLICATED_COMPONENT */,
        chainingRequired: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        category: OPTIONAL<MasterOrShadowAccessPoint_category>
    ) {
        this.ae_title = ae_title;
        this.address = address;
        this.protocolInformation = protocolInformation;
        this.chainingRequired = chainingRequired;
        this.category = category;
    }

    /**
     * @summary Restructures an object into a MasterOrShadowAccessPoint
     * @description
     * 
     * This takes an `object` and converts it to a `MasterOrShadowAccessPoint`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MasterOrShadowAccessPoint`.
     * @returns {MasterOrShadowAccessPoint}
     */
    public static _from_object (_o: { [_K in keyof (MasterOrShadowAccessPoint)]: (MasterOrShadowAccessPoint)[_K] }): MasterOrShadowAccessPoint {
        return new MasterOrShadowAccessPoint(_o.ae_title, _o.address, _o.protocolInformation, _o.chainingRequired, _o.category);
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
    public static get _default_value_for_category () { return MasterOrShadowAccessPoint_category_master; }        /**
         * @summary The enum used as the type of the component `category`
         * @public
         * @static
         */

    public static _enum_for_category = _enum_for_MasterOrShadowAccessPoint_category;
}

/**
 * @summary The Leading Root Component Types of MasterOrShadowAccessPoint
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MasterOrShadowAccessPoint: $.ComponentSpec[] = [
    new $.ComponentSpec("ae-title", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("address", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("protocolInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("chainingRequired", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("category", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of MasterOrShadowAccessPoint
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MasterOrShadowAccessPoint: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MasterOrShadowAccessPoint
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MasterOrShadowAccessPoint: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MasterOrShadowAccessPoint: $.ASN1Decoder<MasterOrShadowAccessPoint> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MasterOrShadowAccessPoint
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MasterOrShadowAccessPoint (el: _Element): MasterOrShadowAccessPoint {
    if (!_cached_decoder_for_MasterOrShadowAccessPoint) { _cached_decoder_for_MasterOrShadowAccessPoint = function (el: _Element): MasterOrShadowAccessPoint {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let ae_title!: Name;
    let address!: PresentationAddress;
    let protocolInformation: OPTIONAL<ProtocolInformation[]>;
    let chainingRequired: OPTIONAL<BOOLEAN> = MasterOrShadowAccessPoint._default_value_for_chainingRequired;
    let category: OPTIONAL<MasterOrShadowAccessPoint_category> = MasterOrShadowAccessPoint._default_value_for_category;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "ae-title": (_el: _Element): void => { ae_title = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "address": (_el: _Element): void => { address = $._decode_explicit<PresentationAddress>(() => _decode_PresentationAddress)(_el); },
        "protocolInformation": (_el: _Element): void => { protocolInformation = $._decode_explicit<ProtocolInformation[]>(() => $._decodeSetOf<ProtocolInformation>(() => _decode_ProtocolInformation))(_el); },
        "chainingRequired": (_el: _Element): void => { chainingRequired = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "category": (_el: _Element): void => { category = $._decode_explicit<MasterOrShadowAccessPoint_category>(() => _decode_MasterOrShadowAccessPoint_category)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MasterOrShadowAccessPoint,
        _extension_additions_list_spec_for_MasterOrShadowAccessPoint,
        _root_component_type_list_2_spec_for_MasterOrShadowAccessPoint,
        undefined,
    );
    return new MasterOrShadowAccessPoint( /* SET_CONSTRUCTOR_CALL */
        ae_title,
        address,
        protocolInformation,
        chainingRequired,
        category
    );
}; }
    return _cached_decoder_for_MasterOrShadowAccessPoint(el);
}

let _cached_encoder_for_MasterOrShadowAccessPoint: $.ASN1Encoder<MasterOrShadowAccessPoint> | null = null;

/**
 * @summary Encodes a(n) MasterOrShadowAccessPoint into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MasterOrShadowAccessPoint, encoded as an ASN.1 Element.
 */
export
function _encode_MasterOrShadowAccessPoint (value: MasterOrShadowAccessPoint, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MasterOrShadowAccessPoint) { _cached_encoder_for_MasterOrShadowAccessPoint = function (value: MasterOrShadowAccessPoint, elGetter: $.ASN1Encoder<MasterOrShadowAccessPoint>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Name, $.BER)(value.ae_title, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_PresentationAddress, $.BER)(value.address, $.BER));
    if (value.protocolInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => $._encodeSetOf<ProtocolInformation>(() => _encode_ProtocolInformation, $.BER), $.BER)(value.protocolInformation, $.BER));
    }
    if (value.chainingRequired !== undefined && !$.deepEq(value.chainingRequired, MasterOrShadowAccessPoint._default_value_for_chainingRequired)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.chainingRequired, $.BER));
    }
    if (value.category !== undefined && !$.deepEq(value.category, MasterOrShadowAccessPoint._default_value_for_category)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 4, () => _encode_MasterOrShadowAccessPoint_category, $.BER)(value.category, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MasterOrShadowAccessPoint(value, elGetter);
}


/* eslint-enable */
