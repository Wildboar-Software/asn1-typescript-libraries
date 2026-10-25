/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../HI2Operations/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../HI2Operations/CalledPartyNumber.ta.mjs";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";


/**
 * @summary DeliveryInformation
 * @description
 * 
 * HI2 and HI3 delivery addresses decided by the LEA. Informative annex M
 * includes them in the notification. Circuit-switched delivery uses E.164
 * numbers; packet delivery uses the LEMF addresses. 3GPP TS 33.108, annex M
 * (informative).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeliveryInformation ::= SEQUENCE
 * {
 *     hi2DeliveryNumber         [0] CalledPartyNumber OPTIONAL,
 *     -- Circuit switch IRI delivery E164 number
 *     hi3DeliveryNumber         [1] CalledPartyNumber OPTIONAL,
 *     -- Circuit switch voice content delivery E164 number
 *     hi2DeliveryIpAddress     [2] IPAddress OPTIONAL,
 *     -- HI2 address of the LEMF.
 *     hi3DeliveryIpAddress    [3] IPAddress OPTIONAL,
 *     -- HI3 address of the LEMF.
 * ...}
 * ```
 * 
 * @class
 */
export
class DeliveryInformation {
    /**
     * @summary `hi2DeliveryNumber`.
     * @description
     * 
     * E.164 number for circuit-switched IRI delivery. 3GPP TS 33.108, annex M
     * (informative) schema.
     * 
     * @public
     * @readonly
     */
    readonly hi2DeliveryNumber: OPTIONAL<CalledPartyNumber>;
    /**
     * @summary `hi3DeliveryNumber`.
     * @description
     * 
     * E.164 number for circuit-switched voice content delivery. 3GPP TS 33.108,
     * annex M (informative) schema.
     * 
     * @public
     * @readonly
     */
    readonly hi3DeliveryNumber: OPTIONAL<CalledPartyNumber>;
    /**
     * @summary `hi2DeliveryIpAddress`.
     * @description
     * 
     * HI2 address of the LEMF. 3GPP TS 33.108, annex M (informative) schema.
     * 
     * @public
     * @readonly
     */
    readonly hi2DeliveryIpAddress: OPTIONAL<IPAddress>;
    /**
     * @summary `hi3DeliveryIpAddress`.
     * @description
     * 
     * HI3 address of the LEMF. 3GPP TS 33.108, annex M (informative) schema.
     * 
     * @public
     * @readonly
     */
    readonly hi3DeliveryIpAddress: OPTIONAL<IPAddress>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        hi2DeliveryNumber?: OPTIONAL<CalledPartyNumber>,
        hi3DeliveryNumber?: OPTIONAL<CalledPartyNumber>,
        hi2DeliveryIpAddress?: OPTIONAL<IPAddress>,
        hi3DeliveryIpAddress?: OPTIONAL<IPAddress>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.hi2DeliveryNumber = hi2DeliveryNumber;
        this.hi3DeliveryNumber = hi3DeliveryNumber;
        this.hi2DeliveryIpAddress = hi2DeliveryIpAddress;
        this.hi3DeliveryIpAddress = hi3DeliveryIpAddress;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a DeliveryInformation
     * @description
     * 
     * This takes an `object` and converts it to a `DeliveryInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeliveryInformation`.
     * @returns {DeliveryInformation}
     */
    public static _from_object (_o: { [_K in keyof (DeliveryInformation)]: (DeliveryInformation)[_K] }): DeliveryInformation {
        return new DeliveryInformation(_o.hi2DeliveryNumber, _o.hi3DeliveryNumber, _o.hi2DeliveryIpAddress, _o.hi3DeliveryIpAddress, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DeliveryInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeliveryInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("hi2DeliveryNumber", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("hi3DeliveryNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("hi2DeliveryIpAddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("hi3DeliveryIpAddress", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of DeliveryInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeliveryInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeliveryInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeliveryInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeliveryInformation: $.ASN1Decoder<DeliveryInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeliveryInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeliveryInformation (el: _Element): DeliveryInformation {
    if (!_cached_decoder_for_DeliveryInformation) { _cached_decoder_for_DeliveryInformation = function (el: _Element): DeliveryInformation {
    let hi2DeliveryNumber: OPTIONAL<CalledPartyNumber>;
    let hi3DeliveryNumber: OPTIONAL<CalledPartyNumber>;
    let hi2DeliveryIpAddress: OPTIONAL<IPAddress>;
    let hi3DeliveryIpAddress: OPTIONAL<IPAddress>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "hi2DeliveryNumber": (_el: _Element): void => { hi2DeliveryNumber = $._decode_explicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "hi3DeliveryNumber": (_el: _Element): void => { hi3DeliveryNumber = $._decode_explicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "hi2DeliveryIpAddress": (_el: _Element): void => { hi2DeliveryIpAddress = $._decode_implicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "hi3DeliveryIpAddress": (_el: _Element): void => { hi3DeliveryIpAddress = $._decode_implicit<IPAddress>(() => _decode_IPAddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeliveryInformation,
        _extension_additions_list_spec_for_DeliveryInformation,
        _root_component_type_list_2_spec_for_DeliveryInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DeliveryInformation(
        hi2DeliveryNumber,
        hi3DeliveryNumber,
        hi2DeliveryIpAddress,
        hi3DeliveryIpAddress,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DeliveryInformation(el);
}

let _cached_encoder_for_DeliveryInformation: $.ASN1Encoder<DeliveryInformation> | null = null;

/**
 * @summary Encodes a(n) DeliveryInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveryInformation, encoded as an ASN.1 Element.
 */
export
function _encode_DeliveryInformation (value: DeliveryInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeliveryInformation) { _cached_encoder_for_DeliveryInformation = function (value: DeliveryInformation, elGetter: $.ASN1Encoder<DeliveryInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.hi2DeliveryNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_CalledPartyNumber, $.BER)(value.hi2DeliveryNumber, $.BER);
    }
    if (value.hi3DeliveryNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_CalledPartyNumber, $.BER)(value.hi3DeliveryNumber, $.BER);
    }
    if (value.hi2DeliveryIpAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_IPAddress, $.BER)(value.hi2DeliveryIpAddress, $.BER);
    }
    if (value.hi3DeliveryIpAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_IPAddress, $.BER)(value.hi3DeliveryIpAddress, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DeliveryInformation(value, elGetter);
}


/* eslint-enable */
