/* eslint-disable */
import {
    type GraphicString,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SMAddressType, _decode_SMAddressType, _encode_SMAddressType, _enum_for_SMAddressType } from "../CHFChargingDataTypes/SMAddressType.ta.mjs";
import { SMAddressDomain, _decode_SMAddressDomain, _encode_SMAddressDomain } from "../CHFChargingDataTypes/SMAddressDomain.ta.mjs";


/**
 * @summary SMAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMAddress ::= SEQUENCE {
 *    sMAddressType     [0] IMPLICIT SMAddressType OPTIONAL,
 *    sMAddressData     [1] IMPLICIT GraphicString OPTIONAL,
 *    sMAddressDomain   [2] IMPLICIT SMAddressDomain OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SMAddress {
    /**
     * @summary `sMAddressType`.
     * @public
     * @readonly
     */
    readonly sMAddressType: OPTIONAL<SMAddressType>;
    /**
     * @summary `sMAddressData`.
     * @public
     * @readonly
     */
    readonly sMAddressData: OPTIONAL<GraphicString>;
    /**
     * @summary `sMAddressDomain`.
     * @public
     * @readonly
     */
    readonly sMAddressDomain: OPTIONAL<SMAddressDomain>;

    constructor (
        sMAddressType?: OPTIONAL<SMAddressType>,
        sMAddressData?: OPTIONAL<GraphicString>,
        sMAddressDomain?: OPTIONAL<SMAddressDomain>
    ) {
        this.sMAddressType = sMAddressType;
        this.sMAddressData = sMAddressData;
        this.sMAddressDomain = sMAddressDomain;
    }

    /**
     * @summary Restructures an object into a SMAddress
     * @description
     * 
     * This takes an `object` and converts it to a `SMAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMAddress`.
     * @returns {SMAddress}
     */
    public static _from_object (_o: { [_K in keyof (SMAddress)]: (SMAddress)[_K] }): SMAddress {
        return new SMAddress(_o.sMAddressType, _o.sMAddressData, _o.sMAddressDomain);
    }

        /**
         * @summary The enum used as the type of the component `sMAddressType`
         * @public
         * @static
         */

    public static _enum_for_sMAddressType = _enum_for_SMAddressType;
}

/**
 * @summary The Leading Root Component Types of SMAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("sMAddressType", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sMAddressData", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sMAddressDomain", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SMAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMAddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMAddress: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMAddress: $.ASN1Decoder<SMAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMAddress (el: _Element): SMAddress {
    if (!_cached_decoder_for_SMAddress) { _cached_decoder_for_SMAddress = function (el: _Element): SMAddress {
    let sMAddressType: OPTIONAL<SMAddressType>;
    let sMAddressData: OPTIONAL<GraphicString>;
    let sMAddressDomain: OPTIONAL<SMAddressDomain>;
    const callbacks: $.DecodingMap = {
        "sMAddressType": (_el: _Element): void => { sMAddressType = $._decode_implicit<SMAddressType>(() => _decode_SMAddressType)(_el); },
        "sMAddressData": (_el: _Element): void => { sMAddressData = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "sMAddressDomain": (_el: _Element): void => { sMAddressDomain = $._decode_implicit<SMAddressDomain>(() => _decode_SMAddressDomain)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMAddress,
        _extension_additions_list_spec_for_SMAddress,
        _root_component_type_list_2_spec_for_SMAddress,
        undefined,
    );
    return new SMAddress(
        sMAddressType,
        sMAddressData,
        sMAddressDomain
    );
}; }
    return _cached_decoder_for_SMAddress(el);
}

let _cached_encoder_for_SMAddress: $.ASN1Encoder<SMAddress> | null = null;

/**
 * @summary Encodes a(n) SMAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMAddress, encoded as an ASN.1 Element.
 */
export
function _encode_SMAddress (value: SMAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMAddress) { _cached_encoder_for_SMAddress = function (value: SMAddress, _elGetter: $.ASN1Encoder<SMAddress>): _Element {
    const _components: _Element[] = [];
    if (value.sMAddressType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_SMAddressType, $.BER)(value.sMAddressType, $.BER));
    }
    if (value.sMAddressData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeGraphicString, $.BER)(value.sMAddressData, $.BER));
    }
    if (value.sMAddressDomain !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SMAddressDomain, $.BER)(value.sMAddressDomain, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SMAddress(value, elGetter);
}


/* eslint-enable */
