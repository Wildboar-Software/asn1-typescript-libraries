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


/**
 * @summary AccessPoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessPoint ::= SET {
 *   ae-title             [0]  Name,
 *   address              [1]  PresentationAddress,
 *   protocolInformation  [2]  SET OF ProtocolInformation OPTIONAL,
 *   chainingRequired     [3]  BOOLEAN DEFAULT FALSE
 * }
 * ```
 * 
 * @class
 */
export
class AccessPoint {
    /**
     * @summary `ae_title`.
     * @public
     * @readonly
     */
    readonly ae_title: Name;
    /**
     * @summary `address`.
     * @public
     * @readonly
     */
    readonly address: PresentationAddress;
    /**
     * @summary `protocolInformation`.
     * @public
     * @readonly
     */
    readonly protocolInformation: OPTIONAL<ProtocolInformation[]>;
    /**
     * @summary `chainingRequired`.
     * @public
     * @readonly
     */
    readonly chainingRequired: OPTIONAL<BOOLEAN>;

    constructor (
        ae_title: Name,
        address: PresentationAddress,
        protocolInformation: OPTIONAL<ProtocolInformation[]>,
        chainingRequired: OPTIONAL<BOOLEAN>
    ) {
        this.ae_title = ae_title;
        this.address = address;
        this.protocolInformation = protocolInformation;
        this.chainingRequired = chainingRequired;
    }

    /**
     * @summary Restructures an object into a AccessPoint
     * @description
     * 
     * This takes an `object` and converts it to a `AccessPoint`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessPoint`.
     * @returns {AccessPoint}
     */
    public static _from_object (_o: { [_K in keyof (AccessPoint)]: (AccessPoint)[_K] }): AccessPoint {
        return new AccessPoint(_o.ae_title, _o.address, _o.protocolInformation, _o.chainingRequired);
    }

    /**
     * @summary Getter that returns the default value for `chainingRequired`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_chainingRequired () { return false; }
}

/**
 * @summary The Leading Root Component Types of AccessPoint
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AccessPoint: $.ComponentSpec[] = [
    new $.ComponentSpec("ae-title", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("address", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("protocolInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("chainingRequired", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AccessPoint
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AccessPoint: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AccessPoint
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AccessPoint: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AccessPoint: $.ASN1Decoder<AccessPoint> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessPoint
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessPoint (el: _Element): AccessPoint {
    if (!_cached_decoder_for_AccessPoint) { _cached_decoder_for_AccessPoint = function (el: _Element): AccessPoint {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let ae_title!: Name;
    let address!: PresentationAddress;
    let protocolInformation: OPTIONAL<ProtocolInformation[]>;
    let chainingRequired: OPTIONAL<BOOLEAN> = AccessPoint._default_value_for_chainingRequired;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "ae-title": (_el: _Element): void => { ae_title = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "address": (_el: _Element): void => { address = $._decode_explicit<PresentationAddress>(() => _decode_PresentationAddress)(_el); },
        "protocolInformation": (_el: _Element): void => { protocolInformation = $._decode_explicit<ProtocolInformation[]>(() => $._decodeSetOf<ProtocolInformation>(() => _decode_ProtocolInformation))(_el); },
        "chainingRequired": (_el: _Element): void => { chainingRequired = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_AccessPoint,
        _extension_additions_list_spec_for_AccessPoint,
        _root_component_type_list_2_spec_for_AccessPoint,
        undefined,
    );
    return new AccessPoint( /* SET_CONSTRUCTOR_CALL */
        ae_title,
        address,
        protocolInformation,
        chainingRequired
    );
}; }
    return _cached_decoder_for_AccessPoint(el);
}

let _cached_encoder_for_AccessPoint: $.ASN1Encoder<AccessPoint> | null = null;

/**
 * @summary Encodes a(n) AccessPoint into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessPoint, encoded as an ASN.1 Element.
 */
export
function _encode_AccessPoint (value: AccessPoint, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessPoint) { _cached_encoder_for_AccessPoint = function (value: AccessPoint, elGetter: $.ASN1Encoder<AccessPoint>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Name, $.BER)(value.ae_title, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_PresentationAddress, $.BER)(value.address, $.BER));
    if (value.protocolInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => $._encodeSetOf<ProtocolInformation>(() => _encode_ProtocolInformation, $.BER), $.BER)(value.protocolInformation, $.BER));
    }
    if (value.chainingRequired !== undefined && !$.deepEq(value.chainingRequired, AccessPoint._default_value_for_chainingRequired)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.chainingRequired, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_AccessPoint(value, elGetter);
}


/* eslint-enable */
