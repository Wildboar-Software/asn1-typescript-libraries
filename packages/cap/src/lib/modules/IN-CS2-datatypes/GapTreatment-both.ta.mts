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
import { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../IN-CS2-datatypes/InformationToSend.ta.mjs";
// export { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../IN-CS2-datatypes/InformationToSend.ta.mjs";
import { Cause, _decode_Cause, _encode_Cause } from "../IN-CS2-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-CS2-datatypes/Cause.ta.mjs";


/**
 * @summary GapTreatment_both
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GapTreatment-both ::= SEQUENCE {
 *     informationToSend  [0]  InformationToSend{bound},
 *     releaseCause       [1]  Cause{bound}
 * }
 * ```
 * 
 * @class
 */
export
class GapTreatment_both {
    constructor (
        /**
         * @summary `informationToSend`.
         * @public
         * @readonly
         */
        readonly informationToSend: InformationToSend,
        /**
         * @summary `releaseCause`.
         * @public
         * @readonly
         */
        readonly releaseCause: Cause
    ) {}

    /**
     * @summary Restructures an object into a GapTreatment_both
     * @description
     * 
     * This takes an `object` and converts it to a `GapTreatment_both`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GapTreatment_both`.
     * @returns {GapTreatment_both}
     */
    public static _from_object (_o: { [_K in keyof (GapTreatment_both)]: (GapTreatment_both)[_K] }): GapTreatment_both {
        return new GapTreatment_both(_o.informationToSend, _o.releaseCause);
    }


}

/**
 * @summary The Leading Root Component Types of GapTreatment_both
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GapTreatment_both: $.ComponentSpec[] = [
    new $.ComponentSpec("informationToSend", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("releaseCause", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of GapTreatment_both
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GapTreatment_both: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GapTreatment_both
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GapTreatment_both: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GapTreatment_both: $.ASN1Decoder<GapTreatment_both> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GapTreatment_both
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GapTreatment_both (el: _Element): GapTreatment_both {
    if (!_cached_decoder_for_GapTreatment_both) { _cached_decoder_for_GapTreatment_both = function (el: _Element): GapTreatment_both {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GapTreatment-both contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "informationToSend";
    sequence[1].name = "releaseCause";
    let informationToSend!: InformationToSend;
    let releaseCause!: Cause;
    informationToSend = $._decode_explicit<InformationToSend>(() => _decode_InformationToSend)(sequence[0]);
    releaseCause = $._decode_implicit<Cause>(() => _decode_Cause)(sequence[1]);
    return new GapTreatment_both(
        informationToSend,
        releaseCause,

    );
}; }
    return _cached_decoder_for_GapTreatment_both(el);
}

let _cached_encoder_for_GapTreatment_both: $.ASN1Encoder<GapTreatment_both> | null = null;

/**
 * @summary Encodes a(n) GapTreatment_both into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GapTreatment_both, encoded as an ASN.1 Element.
 */
export
function _encode_GapTreatment_both (value: GapTreatment_both, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GapTreatment_both) { _cached_encoder_for_GapTreatment_both = function (value: GapTreatment_both): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_InformationToSend, $.BER)(value.informationToSend, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Cause, $.BER)(value.releaseCause, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GapTreatment_both(value, elGetter);
}


/* eslint-enable */
