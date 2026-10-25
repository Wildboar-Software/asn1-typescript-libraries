/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Iccid, _decode_Iccid, _encode_Iccid } from "@wildboar/sgp22/RSPDefinitions";


/**
 * @summary Psmo_disable
 * @description
 * 
 * Disable one enabled Profile. At most one disable appears in an eUICC
 * Package. A disable or an enable already processed in that package is a PSMO
 * failure; section 3.4.2 does not name that failure code. On success the
 * target is marked to be disabled. A disable is followed by an enable in the
 * same eUICC Package so the device keeps connectivity. Disabling via PSMO
 * always uses REFRESH. The eUICC behaviour with refreshFlag set is as defined
 * in SGP.22 section 5.7.17. SGP.32 v1.2, sections 2.11.1.1, 3.3.1, 3.4.2, and
 * 5.13.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Psmo-disable ::= SEQUENCE {
 *     iccid [APPLICATION 26] Iccid
 * }
 * ```
 * 
 * @class
 */
export
class Psmo_disable {
    /**
     * @summary `iccid`.
     * @description
     * ICCID of the Profile to disable, as defined in SGP.22. SGP.32 v1.2, section
     * 2.11.1.1. Section 3.4.2 stops with a PSMO failure when that ICCID matches no
     * installed Profile, and when the Profile is in any state other than Enabled.
     * Section 3.4.2 does not name those result codes.
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
     * @summary Restructures an object into a Psmo_disable
     * @description
     * 
     * This takes an `object` and converts it to a `Psmo_disable`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Psmo_disable`.
     * @returns {Psmo_disable}
     */
    public static _from_object (_o: { [_K in keyof (Psmo_disable)]: (Psmo_disable)[_K] }): Psmo_disable {
        return new Psmo_disable(_o.iccid);
    }


}

/**
 * @summary The Leading Root Component Types of Psmo_disable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Psmo_disable: $.ComponentSpec[] = [
    new $.ComponentSpec("iccid", false, $.hasTag(_TagClass.application, 26))
];

/**
 * @summary The Trailing Root Component Types of Psmo_disable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Psmo_disable: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Psmo_disable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Psmo_disable: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Psmo_disable: $.ASN1Decoder<Psmo_disable> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Psmo_disable
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Psmo_disable (el: _Element): Psmo_disable {
    if (!_cached_decoder_for_Psmo_disable) { _cached_decoder_for_Psmo_disable = function (el: _Element): Psmo_disable {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("Psmo-disable contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iccid";
    const iccid: Iccid = $._decode_implicit<Iccid>(() => _decode_Iccid)(sequence[0]);
    return new Psmo_disable(
        iccid,

    );
}; }
    return _cached_decoder_for_Psmo_disable(el);
}

let _cached_encoder_for_Psmo_disable: $.ASN1Encoder<Psmo_disable> | null = null;

/**
 * @summary Encodes a(n) Psmo_disable into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Psmo_disable, encoded as an ASN.1 Element.
 */
export
function _encode_Psmo_disable (value: Psmo_disable, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Psmo_disable) { _cached_encoder_for_Psmo_disable = function (value: Psmo_disable): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 26, () => _encode_Iccid, $.BER)(value.iccid, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Psmo_disable(value, elGetter);
}


/* eslint-enable */
