/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Iccid, _decode_Iccid, _encode_Iccid } from "@wildboar/sgp22/RSPDefinitions";


/**
 * @summary Psmo_delete
 * @description
 * 
 * Delete one installed Profile. An eUICC Package must omit an enable that
 * grants rollback when it also deletes the Profile the IPA would roll back to.
 * Deletion of a Provisioning Profile or a preloaded Test Profile is
 * implementation-dependent and may be unsupported. Deleting a Fallback Profile
 * is allowed. On success a disabled Profile that is not marked to be enabled
 * is marked to be deleted. An enabled Profile already marked to be disabled,
 * and not referenced by rollback, is marked to be disabled and deleted. When
 * the Profile is deleted, its associated data is deleted. Further eUICC
 * behaviour is as defined in SGP.22 section 5.7.18. SGP.32 v1.2, sections
 * 2.11.1.1, 3.4.3, and 5.13.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Psmo-delete ::= SEQUENCE {
 *     iccid [APPLICATION 26] Iccid
 * }
 * ```
 * 
 * @class
 */
export
class Psmo_delete {
    /**
     * @summary `iccid`.
     * @description
     * ICCID of the Profile to delete, as defined in SGP.22. SGP.32 v1.2, section
     * 2.11.1.1. An unknown ICCID yields iccidOrAidNotFound(1). Enabled while not
     * marked to be disabled, or disabled while marked to be enabled, yields
     * profileNotInDisabledState(2). A Profile referenced by the Rollback Mechanism
     * yields rollbackNotAvailable(20). When the Fallback Profile is enabled and
     * this ICCID is the Profile that ES10b.ExecuteFallbackMechanism disabled, the
     * result is returnFallbackProfile(21). SGP.32 v1.2, section 3.4.3.
     * @public
     * @readonly
     */
    public readonly iccid: Iccid;

    constructor (
        iccid: Iccid
    ) {
        this.iccid = iccid;
    }

    /**
     * @summary Restructures an object into a Psmo_delete
     * @description
     * 
     * This takes an `object` and converts it to a `Psmo_delete`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Psmo_delete`.
     * @returns {Psmo_delete}
     */
    public static _from_object (_o: { [_K in keyof (Psmo_delete)]: (Psmo_delete)[_K] }): Psmo_delete {
        return new Psmo_delete(_o.iccid);
    }


}

/**
 * @summary The Leading Root Component Types of Psmo_delete
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Psmo_delete: $.ComponentSpec[] = [
    new $.ComponentSpec("iccid", false, $.hasTag(_TagClass.application, 26))
];

/**
 * @summary The Trailing Root Component Types of Psmo_delete
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Psmo_delete: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Psmo_delete
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Psmo_delete: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Psmo_delete: $.ASN1Decoder<Psmo_delete> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Psmo_delete
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Psmo_delete (el: _Element): Psmo_delete {
    if (!_cached_decoder_for_Psmo_delete) { _cached_decoder_for_Psmo_delete = function (el: _Element): Psmo_delete {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("Psmo-delete contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iccid";
    const iccid: Iccid = $._decode_implicit<Iccid>(() => _decode_Iccid)(sequence[0]);
    return new Psmo_delete(
        iccid,

    );
}; }
    return _cached_decoder_for_Psmo_delete(el);
}

let _cached_encoder_for_Psmo_delete: $.ASN1Encoder<Psmo_delete> | null = null;

/**
 * @summary Encodes a(n) Psmo_delete into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Psmo_delete, encoded as an ASN.1 Element.
 */
export
function _encode_Psmo_delete (value: Psmo_delete, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Psmo_delete) { _cached_encoder_for_Psmo_delete = function (value: Psmo_delete): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 26, () => _encode_Iccid, $.BER)(value.iccid, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Psmo_delete(value, elGetter);
}


/* eslint-enable */
