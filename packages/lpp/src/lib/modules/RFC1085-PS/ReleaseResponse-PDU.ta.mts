/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SessionConnectionIdentifier, _decode_SessionConnectionIdentifier, _encode_SessionConnectionIdentifier } from "../RFC1085-PS/SessionConnectionIdentifier.ta.mjs";
// export { SessionConnectionIdentifier, _decode_SessionConnectionIdentifier, _encode_SessionConnectionIdentifier } from "../RFC1085-PS/SessionConnectionIdentifier.ta.mjs";
import { UserData_PDU, _decode_UserData_PDU, _encode_UserData_PDU } from "../RFC1085-PS/UserData-PDU.ta.mjs";
// export { UserData_PDU, _decode_UserData_PDU, _encode_UserData_PDU } from "../RFC1085-PS/UserData-PDU.ta.mjs";


/**
 * @summary ReleaseResponse_PDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReleaseResponse-PDU ::= [3] IMPLICIT SEQUENCE {
 *     -- present only in the udp-based service
 *     reference   SessionConnectionIdentifier OPTIONAL,
 *     user-data   UserData-PDU
 * }
 * ```
 * 
 * @class
 */
export
class ReleaseResponse_PDU {
    constructor (
        /**
         * @summary `reference`.
         * @public
         * @readonly
         */
        readonly reference: OPTIONAL<SessionConnectionIdentifier>,
        /**
         * @summary `user_data`.
         * @public
         * @readonly
         */
        readonly user_data: UserData_PDU
    ) {}

    /**
     * @summary Restructures an object into a ReleaseResponse_PDU
     * @description
     * 
     * This takes an `object` and converts it to a `ReleaseResponse_PDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReleaseResponse_PDU`.
     * @returns {ReleaseResponse_PDU}
     */
    public static _from_object (_o: { [_K in keyof (ReleaseResponse_PDU)]: (ReleaseResponse_PDU)[_K] }): ReleaseResponse_PDU {
        return new ReleaseResponse_PDU(_o.reference, _o.user_data);
    }


}

/**
 * @summary The Leading Root Component Types of ReleaseResponse_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReleaseResponse_PDU: $.ComponentSpec[] = [
    new $.ComponentSpec("reference", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("user-data", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ReleaseResponse_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReleaseResponse_PDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReleaseResponse_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReleaseResponse_PDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReleaseResponse_PDU: $.ASN1Decoder<ReleaseResponse_PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseResponse_PDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReleaseResponse_PDU (el: _Element): ReleaseResponse_PDU {
    if (!_cached_decoder_for_ReleaseResponse_PDU) { _cached_decoder_for_ReleaseResponse_PDU = $._decode_implicit<ReleaseResponse_PDU>(() => function (el: _Element): ReleaseResponse_PDU {
    let reference: OPTIONAL<SessionConnectionIdentifier>;
    let user_data!: UserData_PDU;
    const callbacks: $.DecodingMap = {
        "reference": (_el: _Element): void => { reference = _decode_SessionConnectionIdentifier(_el); },
        "user-data": (_el: _Element): void => { user_data = _decode_UserData_PDU(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReleaseResponse_PDU,
        _extension_additions_list_spec_for_ReleaseResponse_PDU,
        _root_component_type_list_2_spec_for_ReleaseResponse_PDU,
        undefined,
    );
    return new ReleaseResponse_PDU(
        reference,
        user_data
    );
}); }
    return _cached_decoder_for_ReleaseResponse_PDU(el);
}

let _cached_encoder_for_ReleaseResponse_PDU: $.ASN1Encoder<ReleaseResponse_PDU> | null = null;

/**
 * @summary Encodes a(n) ReleaseResponse_PDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseResponse_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_ReleaseResponse_PDU (value: ReleaseResponse_PDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReleaseResponse_PDU) { _cached_encoder_for_ReleaseResponse_PDU = $._encode_implicit(_TagClass.context, 3, () => function (value: ReleaseResponse_PDU, elGetter: $.ASN1Encoder<ReleaseResponse_PDU>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.reference === undefined) ? undefined : _encode_SessionConnectionIdentifier(value.reference, $.BER)),
            /* REQUIRED   */ _encode_UserData_PDU(value.user_data, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ReleaseResponse_PDU(value, elGetter);
}


/* eslint-enable */
