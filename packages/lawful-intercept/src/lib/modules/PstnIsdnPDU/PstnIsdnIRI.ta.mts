/* eslint-disable */
import {
    type RELATIVE_OID,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PstnIsdnIRIContents, _decode_PstnIsdnIRIContents, _encode_PstnIsdnIRIContents } from "../PstnIsdnPDU/PstnIsdnIRIContents.ta.mjs";
// export { PstnIsdnIRIContents, _decode_PstnIsdnIRIContents, _encode_PstnIsdnIRIContents } from "../PstnIsdnPDU/PstnIsdnIRIContents.ta.mjs";


/**
 * @summary PstnIsdnIRI
 * @description
 *
 * Supplementary-information IRI for a PSTN/ISDN communications session.
 * IRI events defined by ETSI TS 101 671 are sent as `ETSI671IRI`, not here.
 * Headers on every IRI are those of ETSI TS 102 232-1, and that header shall
 * be populated. Lawful Interception Identifier, Communication Identifier, and
 * timestamp also appear in the ETSI TS 101 671 IRI parameters; populating
 * both copies is recommended.
 *
 * A new Communications Identity Number is assigned when a session begins, as
 * defined in ETSI TS 101 671. Typically that is each IRI-BEGIN, and every
 * later IRI and CC of the session shares it. A REPORT record is typically a
 * session of its own. If CC or IRI is produced before the IRI-BEGIN, the
 * provider still uses one CIN for the whole session.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clauses 5.2, 5.3, 6.3, and A.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223206/03.05.01_60/ts_10223206v030501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PstnIsdnIRI ::= SEQUENCE
 * {
 *     pstnIsdnIRIObjId        [0] RELATIVE-OID,
 *     pstnIsdnIRIContents     [1] PstnIsdnIRIContents
 * }
 * ```
 * 
 * @class
 */
export
class PstnIsdnIRI {
    /**
     * @summary `pstnIsdnIRIObjId`.
     * @description
     *
     * Set to `pstnIsdnIRIObjId`, `{pstnIsdnPDUObjId iRI(1)}`.
     *
     * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 5.2 and annex A.
     *
     * @public
     * @readonly
     */
    readonly pstnIsdnIRIObjId: RELATIVE_OID;
    /**
     * @summary `pstnIsdnIRIContents`.
     * @description
     *
     * The only defined alternative is `supplementaryInfo`. Further
     * alternatives may be added after the extension marker.
     *
     * ETSI TS 102 232-6 V3.5.1 (2023-03), clause 6.3 and annex A.
     *
     * @public
     * @readonly
     */
    readonly pstnIsdnIRIContents: PstnIsdnIRIContents;

    constructor (
        pstnIsdnIRIObjId: RELATIVE_OID,
        pstnIsdnIRIContents: PstnIsdnIRIContents
    ) {
        this.pstnIsdnIRIObjId = pstnIsdnIRIObjId;
        this.pstnIsdnIRIContents = pstnIsdnIRIContents;
    }

    /**
     * @summary Restructures an object into a PstnIsdnIRI
     * @description
     * 
     * This takes an `object` and converts it to a `PstnIsdnIRI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PstnIsdnIRI`.
     * @returns {PstnIsdnIRI}
     */
    public static _from_object (_o: { [_K in keyof (PstnIsdnIRI)]: (PstnIsdnIRI)[_K] }): PstnIsdnIRI {
        return new PstnIsdnIRI(_o.pstnIsdnIRIObjId, _o.pstnIsdnIRIContents);
    }


}

/**
 * @summary The Leading Root Component Types of PstnIsdnIRI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PstnIsdnIRI: $.ComponentSpec[] = [
    new $.ComponentSpec("pstnIsdnIRIObjId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("pstnIsdnIRIContents", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of PstnIsdnIRI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PstnIsdnIRI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PstnIsdnIRI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PstnIsdnIRI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PstnIsdnIRI: $.ASN1Decoder<PstnIsdnIRI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PstnIsdnIRI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PstnIsdnIRI (el: _Element): PstnIsdnIRI {
    if (!_cached_decoder_for_PstnIsdnIRI) { _cached_decoder_for_PstnIsdnIRI = function (el: _Element): PstnIsdnIRI {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PstnIsdnIRI contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pstnIsdnIRIObjId";
    sequence[1].name = "pstnIsdnIRIContents";
    let pstnIsdnIRIObjId!: RELATIVE_OID;
    let pstnIsdnIRIContents!: PstnIsdnIRIContents;
    pstnIsdnIRIObjId = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(sequence[0]);
    pstnIsdnIRIContents = $._decode_explicit<PstnIsdnIRIContents>(() => _decode_PstnIsdnIRIContents)(sequence[1]);
    return new PstnIsdnIRI(
        pstnIsdnIRIObjId,
        pstnIsdnIRIContents,

    );
}; }
    return _cached_decoder_for_PstnIsdnIRI(el);
}

let _cached_encoder_for_PstnIsdnIRI: $.ASN1Encoder<PstnIsdnIRI> | null = null;

/**
 * @summary Encodes a(n) PstnIsdnIRI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PstnIsdnIRI, encoded as an ASN.1 Element.
 */
export
function _encode_PstnIsdnIRI (value: PstnIsdnIRI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PstnIsdnIRI) { _cached_encoder_for_PstnIsdnIRI = function (value: PstnIsdnIRI, elGetter: $.ASN1Encoder<PstnIsdnIRI>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.pstnIsdnIRIObjId, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_PstnIsdnIRIContents, $.BER)(value.pstnIsdnIRIContents, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_PstnIsdnIRI(value, elGetter);
}


/* eslint-enable */
