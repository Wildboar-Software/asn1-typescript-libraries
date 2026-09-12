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
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";


/**
 * @summary ChangeAccessControl_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeAccessControl-Response ::= SEQUENCE {
 *    numberMatched          [0] IMPLICIT Unsigned32,
 *    numberChanged          [1] IMPLICIT Unsigned32
 *    }
 * ```
 * 
 * @class
 */
export
class ChangeAccessControl_Response {
    constructor (
        /**
         * @summary `numberMatched`.
         * @public
         * @readonly
         */
        readonly numberMatched: Unsigned32,
        /**
         * @summary `numberChanged`.
         * @public
         * @readonly
         */
        readonly numberChanged: Unsigned32
    ) {}

    /**
     * @summary Restructures an object into a ChangeAccessControl_Response
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeAccessControl_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeAccessControl_Response`.
     * @returns {ChangeAccessControl_Response}
     */
    public static _from_object (_o: { [_K in keyof (ChangeAccessControl_Response)]: (ChangeAccessControl_Response)[_K] }): ChangeAccessControl_Response {
        return new ChangeAccessControl_Response(_o.numberMatched, _o.numberChanged);
    }


}

/**
 * @summary The Leading Root Component Types of ChangeAccessControl_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeAccessControl_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("numberMatched", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numberChanged", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ChangeAccessControl_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeAccessControl_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeAccessControl_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeAccessControl_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeAccessControl_Response: $.ASN1Decoder<ChangeAccessControl_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeAccessControl_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeAccessControl_Response (el: _Element): ChangeAccessControl_Response {
    if (!_cached_decoder_for_ChangeAccessControl_Response) { _cached_decoder_for_ChangeAccessControl_Response = function (el: _Element): ChangeAccessControl_Response {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ChangeAccessControl-Response contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "numberMatched";
    sequence[1].name = "numberChanged";
    let numberMatched!: Unsigned32;
    let numberChanged!: Unsigned32;
    numberMatched = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(sequence[0]);
    numberChanged = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(sequence[1]);
    return new ChangeAccessControl_Response(
        numberMatched,
        numberChanged,

    );
}; }
    return _cached_decoder_for_ChangeAccessControl_Response(el);
}

let _cached_encoder_for_ChangeAccessControl_Response: $.ASN1Encoder<ChangeAccessControl_Response> | null = null;

/**
 * @summary Encodes a(n) ChangeAccessControl_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeAccessControl_Response, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeAccessControl_Response (value: ChangeAccessControl_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeAccessControl_Response) { _cached_encoder_for_ChangeAccessControl_Response = function (value: ChangeAccessControl_Response): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Unsigned32, $.BER)(value.numberMatched, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Unsigned32, $.BER)(value.numberChanged, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChangeAccessControl_Response(value, elGetter);
}


/* eslint-enable */
