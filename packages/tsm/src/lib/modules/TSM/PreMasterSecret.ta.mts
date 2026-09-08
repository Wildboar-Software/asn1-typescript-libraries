/* eslint-disable */
import {
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
import { ProtocolVersion, _decode_ProtocolVersion, _encode_ProtocolVersion } from "../TSM/ProtocolVersion.ta.mjs";

import { Opaque, _decode_Opaque, _encode_Opaque } from "../TSM/Opaque.ta.mjs";



/**
 * @summary PreMasterSecret
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PreMasterSecret ::= SEQUENCE {
 * client-version    ProtocolVersion,
 * random        Opaque(SIZE(46))
 * }
 * ```
 * 
 * @class
 */
export
class PreMasterSecret {
    constructor (
        /**
         * @summary `client_version`.
         * @public
         * @readonly
         */
        readonly client_version: ProtocolVersion,
        /**
         * @summary `random`.
         * @public
         * @readonly
         */
        readonly random: Opaque
    ) {}

    /**
     * @summary Restructures an object into a PreMasterSecret
     * @description
     * 
     * This takes an `object` and converts it to a `PreMasterSecret`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PreMasterSecret`.
     * @returns {PreMasterSecret}
     */
    public static _from_object (_o: { [_K in keyof (PreMasterSecret)]: (PreMasterSecret)[_K] }): PreMasterSecret {
        return new PreMasterSecret(_o.client_version, _o.random);
    }


}

/**
 * @summary The Leading Root Component Types of PreMasterSecret
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PreMasterSecret: $.ComponentSpec[] = [
    new $.ComponentSpec("client-version", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("random", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of PreMasterSecret
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PreMasterSecret: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PreMasterSecret
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PreMasterSecret: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PreMasterSecret: $.ASN1Decoder<PreMasterSecret> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PreMasterSecret
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PreMasterSecret (el: _Element): PreMasterSecret {
    if (!_cached_decoder_for_PreMasterSecret) { _cached_decoder_for_PreMasterSecret = function (el: _Element): PreMasterSecret {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PreMasterSecret contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "client-version";
    sequence[1].name = "random";
    let client_version!: ProtocolVersion;
    let random!: Opaque;
    client_version = _decode_ProtocolVersion(sequence[0]);
    random = _decode_Opaque(sequence[1]);
    return new PreMasterSecret(
        client_version,
        random,

    );
}; }
    return _cached_decoder_for_PreMasterSecret(el);
}

let _cached_encoder_for_PreMasterSecret: $.ASN1Encoder<PreMasterSecret> | null = null;

/**
 * @summary Encodes a(n) PreMasterSecret into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PreMasterSecret, encoded as an ASN.1 Element.
 */
export
function _encode_PreMasterSecret (value: PreMasterSecret, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PreMasterSecret) { _cached_encoder_for_PreMasterSecret = function (value: PreMasterSecret): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ProtocolVersion(value.client_version, $.BER),
            /* REQUIRED   */ _encode_Opaque(value.random, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PreMasterSecret(value, elGetter);
}


/* eslint-enable */
