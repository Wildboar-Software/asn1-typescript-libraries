/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CltuIdentification, _decode_CltuIdentification, _encode_CltuIdentification } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuIdentification.ta.mjs";
import { type ConditionalTime, _decode_ConditionalTime, _encode_ConditionalTime } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ConditionalTime.ta.mjs";
import { type CltuStatus, _decode_CltuStatus, _encode_CltuStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuStatus.ta.mjs";


/**
 * @summary CltuLastProcessed_cltuProcessed
 * @description
 * 
 * Identity, start time, and status of the CLTU the provider most recently
 * attempted to radiate. Used when cltu-last-processed is not null. CCSDS
 * 912.1-B-5, sections 3.7.2.5 and 3.9.2.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuLastProcessed-cltuProcessed ::= SEQUENCE
 *    {  cltuIdentification               CltuIdentification
 *    ,  radiationStartTime               ConditionalTime
 *    ,  cltuStatus                       CltuStatus
 *    }
 * ```
 * 
 * @class
 */
export
class CltuLastProcessed_cltuProcessed {
    /**
     * @summary `cltuIdentification`.
     * @description
     *
     * cltu-identification of the CLTU most recently processed or attempted,
     * whether radiation finished or an exception occurred. CCSDS 912.1-B-5,
     * sections 3.7.2.5 and 3.9.2.3.
     * @public
     * @readonly
     */
    readonly cltuIdentification: CltuIdentification;
    /**
     * @summary `radiationStartTime`.
     * @description
     *
     * Time of the leading edge of the first radiated bit of that CLTU. The
     * undefined alternative is the section 3 value null, required when
     * cltu-status is expired or radiation has not started. Section 3.7.2.8
     * names that second case production not started; section 3.9.2.6 names it
     * radiation not started. Both refer to productionNotStarted. UTC CDS, epoch
     * 1958-01-01. CCSDS 912.1-B-5, sections 3.7.2.8, 3.9.2.6, and 3.1.7.
     * @public
     * @readonly
     */
    readonly radiationStartTime: ConditionalTime;
    /**
     * @summary `cltuStatus`.
     * @description
     *
     * Processing state of this CLTU: radiated, expired, interrupted, radiation
     * started, or radiation not started. CCSDS 912.1-B-5, sections 3.7.2.7 and
     * 3.9.2.5.
     * @public
     * @readonly
     */
    readonly cltuStatus: CltuStatus;

    constructor (
        cltuIdentification: CltuIdentification,
        radiationStartTime: ConditionalTime,
        cltuStatus: CltuStatus
    ) {
        this.cltuIdentification = cltuIdentification;
        this.radiationStartTime = radiationStartTime;
        this.cltuStatus = cltuStatus;
    }

    /**
     * @summary Restructures an object into a CltuLastProcessed_cltuProcessed
     * @description
     * 
     * This takes an `object` and converts it to a `CltuLastProcessed_cltuProcessed`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuLastProcessed_cltuProcessed`.
     * @returns {CltuLastProcessed_cltuProcessed}
     */
    public static _from_object (_o: { [_K in keyof (CltuLastProcessed_cltuProcessed)]: (CltuLastProcessed_cltuProcessed)[_K] }): CltuLastProcessed_cltuProcessed {
        return new CltuLastProcessed_cltuProcessed(_o.cltuIdentification, _o.radiationStartTime, _o.cltuStatus);
    }


}

/**
 * @summary The Leading Root Component Types of CltuLastProcessed_cltuProcessed
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuLastProcessed_cltuProcessed: $.ComponentSpec[] = [
    new $.ComponentSpec("cltuIdentification", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("radiationStartTime", false, $.hasAnyTag),
    new $.ComponentSpec("cltuStatus", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuLastProcessed_cltuProcessed
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuLastProcessed_cltuProcessed: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuLastProcessed_cltuProcessed
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuLastProcessed_cltuProcessed: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuLastProcessed_cltuProcessed: $.ASN1Decoder<CltuLastProcessed_cltuProcessed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuLastProcessed_cltuProcessed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuLastProcessed_cltuProcessed (el: _Element): CltuLastProcessed_cltuProcessed {
    if (!_cached_decoder_for_CltuLastProcessed_cltuProcessed) { _cached_decoder_for_CltuLastProcessed_cltuProcessed = function (el: _Element): CltuLastProcessed_cltuProcessed {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("CltuLastProcessed-cltuProcessed contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "cltuIdentification";
    sequence[1].name = "radiationStartTime";
    sequence[2].name = "cltuStatus";
    let cltuIdentification!: CltuIdentification;
    let radiationStartTime!: ConditionalTime;
    let cltuStatus!: CltuStatus;
    cltuIdentification = _decode_CltuIdentification(sequence[0]);
    radiationStartTime = _decode_ConditionalTime(sequence[1]);
    cltuStatus = _decode_CltuStatus(sequence[2]);
    return new CltuLastProcessed_cltuProcessed(
        cltuIdentification,
        radiationStartTime,
        cltuStatus,

    );
}; }
    return _cached_decoder_for_CltuLastProcessed_cltuProcessed(el);
}

let _cached_encoder_for_CltuLastProcessed_cltuProcessed: $.ASN1Encoder<CltuLastProcessed_cltuProcessed> | null = null;

/**
 * @summary Encodes a(n) CltuLastProcessed_cltuProcessed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuLastProcessed_cltuProcessed, encoded as an ASN.1 Element.
 */
export
function _encode_CltuLastProcessed_cltuProcessed (value: CltuLastProcessed_cltuProcessed, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuLastProcessed_cltuProcessed) { _cached_encoder_for_CltuLastProcessed_cltuProcessed = function (value: CltuLastProcessed_cltuProcessed, _elGetter: $.ASN1Encoder<CltuLastProcessed_cltuProcessed>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_CltuIdentification(value.cltuIdentification, $.BER),
        /* REQUIRED   */ _encode_ConditionalTime(value.radiationStartTime, $.BER),
        /* REQUIRED   */ _encode_CltuStatus(value.cltuStatus, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuLastProcessed_cltuProcessed(value, elGetter);
}


/* eslint-enable */
