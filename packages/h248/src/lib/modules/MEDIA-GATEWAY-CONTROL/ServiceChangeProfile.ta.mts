/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceChangeProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceChangeProfile ::= SEQUENCE
 *     {
 *         profileName        [0] IA5String(SIZE (1..67))
 *         -- 64 characters for name, 1 for "/", 2 for version to match ABNF
 *     }
 * ```
 * 
 * @class
 */
export
class ServiceChangeProfile {
    constructor (
        /**
         * @summary `profileName`.
         * @public
         * @readonly
         */
        readonly profileName: IA5String
    ) {}

    /**
     * @summary Restructures an object into a ServiceChangeProfile
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceChangeProfile`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceChangeProfile`.
     * @returns {ServiceChangeProfile}
     */
    public static _from_object (_o: { [_K in keyof (ServiceChangeProfile)]: (ServiceChangeProfile)[_K] }): ServiceChangeProfile {
        return new ServiceChangeProfile(_o.profileName);
    }


}

/**
 * @summary The Leading Root Component Types of ServiceChangeProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceChangeProfile: $.ComponentSpec[] = [
    new $.ComponentSpec("profileName", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of ServiceChangeProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceChangeProfile: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceChangeProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceChangeProfile: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceChangeProfile: $.ASN1Decoder<ServiceChangeProfile> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceChangeProfile
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceChangeProfile (el: _Element): ServiceChangeProfile {
    if (!_cached_decoder_for_ServiceChangeProfile) { _cached_decoder_for_ServiceChangeProfile = function (el: _Element): ServiceChangeProfile {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ServiceChangeProfile contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "profileName";
    let profileName!: IA5String;
    profileName = $._decode_implicit<IA5String>(() => $._decodeIA5String)(sequence[0]);
    return new ServiceChangeProfile(
        profileName,

    );
}; }
    return _cached_decoder_for_ServiceChangeProfile(el);
}

let _cached_encoder_for_ServiceChangeProfile: $.ASN1Encoder<ServiceChangeProfile> | null = null;

/**
 * @summary Encodes a(n) ServiceChangeProfile into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceChangeProfile, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceChangeProfile (value: ServiceChangeProfile, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceChangeProfile) { _cached_encoder_for_ServiceChangeProfile = function (value: ServiceChangeProfile, elGetter: $.ASN1Encoder<ServiceChangeProfile>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeIA5String, $.BER)(value.profileName, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServiceChangeProfile(value, elGetter);
}


/* eslint-enable */
