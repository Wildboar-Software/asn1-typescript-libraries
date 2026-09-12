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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Unsigned16, _decode_Unsigned16, _encode_Unsigned16 } from "../ISO-9506-MMS-1/Unsigned16.ta.mjs";
// export { Unsigned16, _decode_Unsigned16, _encode_Unsigned16 } from "../ISO-9506-MMS-1/Unsigned16.ta.mjs";


/**
 * @summary DefineSemaphore_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefineSemaphore-Request ::= SEQUENCE {
 *    semaphoreName              [0] ObjectName,
 *    numberOfTokens             [1] IMPLICIT Unsigned16 }
 * ```
 * 
 * @class
 */
export
class DefineSemaphore_Request {
    constructor (
        /**
         * @summary `semaphoreName`.
         * @public
         * @readonly
         */
        readonly semaphoreName: ObjectName,
        /**
         * @summary `numberOfTokens`.
         * @public
         * @readonly
         */
        readonly numberOfTokens: Unsigned16
    ) {}

    /**
     * @summary Restructures an object into a DefineSemaphore_Request
     * @description
     * 
     * This takes an `object` and converts it to a `DefineSemaphore_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DefineSemaphore_Request`.
     * @returns {DefineSemaphore_Request}
     */
    public static _from_object (_o: { [_K in keyof (DefineSemaphore_Request)]: (DefineSemaphore_Request)[_K] }): DefineSemaphore_Request {
        return new DefineSemaphore_Request(_o.semaphoreName, _o.numberOfTokens);
    }


}

/**
 * @summary The Leading Root Component Types of DefineSemaphore_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DefineSemaphore_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("semaphoreName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numberOfTokens", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DefineSemaphore_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DefineSemaphore_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DefineSemaphore_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DefineSemaphore_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DefineSemaphore_Request: $.ASN1Decoder<DefineSemaphore_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DefineSemaphore_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DefineSemaphore_Request (el: _Element): DefineSemaphore_Request {
    if (!_cached_decoder_for_DefineSemaphore_Request) { _cached_decoder_for_DefineSemaphore_Request = function (el: _Element): DefineSemaphore_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DefineSemaphore-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "semaphoreName";
    sequence[1].name = "numberOfTokens";
    let semaphoreName!: ObjectName;
    let numberOfTokens!: Unsigned16;
    semaphoreName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(sequence[0]);
    numberOfTokens = $._decode_implicit<Unsigned16>(() => _decode_Unsigned16)(sequence[1]);
    return new DefineSemaphore_Request(
        semaphoreName,
        numberOfTokens,

    );
}; }
    return _cached_decoder_for_DefineSemaphore_Request(el);
}

let _cached_encoder_for_DefineSemaphore_Request: $.ASN1Encoder<DefineSemaphore_Request> | null = null;

/**
 * @summary Encodes a(n) DefineSemaphore_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefineSemaphore_Request, encoded as an ASN.1 Element.
 */
export
function _encode_DefineSemaphore_Request (value: DefineSemaphore_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DefineSemaphore_Request) { _cached_encoder_for_DefineSemaphore_Request = function (value: DefineSemaphore_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.semaphoreName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Unsigned16, $.BER)(value.numberOfTokens, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DefineSemaphore_Request(value, elGetter);
}


/* eslint-enable */
