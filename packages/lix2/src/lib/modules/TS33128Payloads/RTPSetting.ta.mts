/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
import { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";
// export { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";


/**
 * @summary RTPSetting
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RTPSetting ::= SEQUENCE
 * {
 *     iPAddress                  [1] IPAddress,
 *     portNumber                 [2] PortNumber
 * }
 * ```
 * 
 * @class
 */
export
class RTPSetting {
    constructor (
        /**
         * @summary `iPAddress`.
         * @public
         * @readonly
         */
        readonly iPAddress: IPAddress,
        /**
         * @summary `portNumber`.
         * @public
         * @readonly
         */
        readonly portNumber: PortNumber
    ) {}

    /**
     * @summary Restructures an object into a RTPSetting
     * @description
     * 
     * This takes an `object` and converts it to a `RTPSetting`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RTPSetting`.
     * @returns {RTPSetting}
     */
    public static _from_object (_o: { [_K in keyof (RTPSetting)]: (RTPSetting)[_K] }): RTPSetting {
        return new RTPSetting(_o.iPAddress, _o.portNumber);
    }


}

/**
 * @summary The Leading Root Component Types of RTPSetting
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RTPSetting: $.ComponentSpec[] = [
    new $.ComponentSpec("iPAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("portNumber", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RTPSetting
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RTPSetting: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RTPSetting
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RTPSetting: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RTPSetting: $.ASN1Decoder<RTPSetting> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RTPSetting
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RTPSetting (el: _Element): RTPSetting {
    if (!_cached_decoder_for_RTPSetting) { _cached_decoder_for_RTPSetting = function (el: _Element): RTPSetting {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RTPSetting contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iPAddress";
    sequence[1].name = "portNumber";
    let iPAddress!: IPAddress;
    let portNumber!: PortNumber;
    iPAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(sequence[0]);
    portNumber = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(sequence[1]);
    return new RTPSetting(
        iPAddress,
        portNumber,

    );
}; }
    return _cached_decoder_for_RTPSetting(el);
}

let _cached_encoder_for_RTPSetting: $.ASN1Encoder<RTPSetting> | null = null;

/**
 * @summary Encodes a(n) RTPSetting into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RTPSetting, encoded as an ASN.1 Element.
 */
export
function _encode_RTPSetting (value: RTPSetting, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RTPSetting) { _cached_encoder_for_RTPSetting = function (value: RTPSetting, elGetter: $.ASN1Encoder<RTPSetting>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IPAddress, $.BER)(value.iPAddress, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PortNumber, $.BER)(value.portNumber, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RTPSetting(value, elGetter);
}


/* eslint-enable */
