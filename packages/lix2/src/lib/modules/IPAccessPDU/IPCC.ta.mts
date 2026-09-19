/* eslint-disable */
import {
    RELATIVE_OID,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPCCContents, _decode_IPCCContents, _encode_IPCCContents } from "../IPAccessPDU/IPCCContents.ta.mjs";
// export { IPCCContents, _decode_IPCCContents, _encode_IPCCContents } from "../IPAccessPDU/IPCCContents.ta.mjs";


/**
 * @summary IPCC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPCC ::= SEQUENCE
 * {
 *     iPCCObjId           [0] RELATIVE-OID,
 *     iPCCContents        [1] IPCCContents
 * }
 * ```
 * 
 * @class
 */
export
class IPCC {
    constructor (
        /**
         * @summary `iPCCObjId`.
         * @public
         * @readonly
         */
        readonly iPCCObjId: RELATIVE_OID,
        /**
         * @summary `iPCCContents`.
         * @public
         * @readonly
         */
        readonly iPCCContents: IPCCContents
    ) {}

    /**
     * @summary Restructures an object into a IPCC
     * @description
     * 
     * This takes an `object` and converts it to a `IPCC`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPCC`.
     * @returns {IPCC}
     */
    public static _from_object (_o: { [_K in keyof (IPCC)]: (IPCC)[_K] }): IPCC {
        return new IPCC(_o.iPCCObjId, _o.iPCCContents);
    }


}

/**
 * @summary The Leading Root Component Types of IPCC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPCC: $.ComponentSpec[] = [
    new $.ComponentSpec("iPCCObjId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iPCCContents", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IPCC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPCC: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPCC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPCC: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IPCC: $.ASN1Decoder<IPCC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPCC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPCC (el: _Element): IPCC {
    if (!_cached_decoder_for_IPCC) { _cached_decoder_for_IPCC = function (el: _Element): IPCC {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IPCC contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iPCCObjId";
    sequence[1].name = "iPCCContents";
    let iPCCObjId!: RELATIVE_OID;
    let iPCCContents!: IPCCContents;
    iPCCObjId = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(sequence[0]);
    iPCCContents = $._decode_explicit<IPCCContents>(() => _decode_IPCCContents)(sequence[1]);
    return new IPCC(
        iPCCObjId,
        iPCCContents,

    );
}; }
    return _cached_decoder_for_IPCC(el);
}

let _cached_encoder_for_IPCC: $.ASN1Encoder<IPCC> | null = null;

/**
 * @summary Encodes a(n) IPCC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPCC, encoded as an ASN.1 Element.
 */
export
function _encode_IPCC (value: IPCC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPCC) { _cached_encoder_for_IPCC = function (value: IPCC, elGetter: $.ASN1Encoder<IPCC>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.iPCCObjId, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IPCCContents, $.BER)(value.iPCCContents, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IPCC(value, elGetter);
}


/* eslint-enable */
