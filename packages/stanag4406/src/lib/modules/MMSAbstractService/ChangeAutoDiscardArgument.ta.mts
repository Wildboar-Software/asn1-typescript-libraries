/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChangeAutoDiscardArgument
 * @description
 * 
 * Argument of change-auto-discard, on the management port. Edition 2 names the
 * two booleans and does not further define expired or obsolete. Where an
 * implementation also supports IPM, the management operations may apply to
 * both. The operation has no result. STANAG 4406 (Ed. 2), Annex A, Annex G.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeAutoDiscardArgument ::= SET {
 *   auto-discard-expired-MMs   [0]  BOOLEAN,
 *   auto-discard-obsolete-MMs  [1]  BOOLEAN}
 * ```
 * 
 * @class
 */
export
class ChangeAutoDiscardArgument {
    /**
     * @summary `auto_discard_expired_MMs`.
     * @description
     *
     * Whether expired MMs are discarded automatically. Edition 2 does not
     * define expired. STANAG 4406 (Ed. 2), Annex A, Annex G.
     * @public
     * @readonly
     */
    readonly auto_discard_expired_MMs: BOOLEAN;
    /**
     * @summary `auto_discard_obsolete_MMs`.
     * @description
     *
     * Whether obsolete MMs are discarded automatically. Edition 2 does not
     * define obsolete. STANAG 4406 (Ed. 2), Annex A, Annex G.
     * @public
     * @readonly
     */
    readonly auto_discard_obsolete_MMs: BOOLEAN;

    constructor (
        auto_discard_expired_MMs: BOOLEAN,
        auto_discard_obsolete_MMs: BOOLEAN
    ) {
        this.auto_discard_expired_MMs = auto_discard_expired_MMs;
        this.auto_discard_obsolete_MMs = auto_discard_obsolete_MMs;
    }

    /**
     * @summary Restructures an object into a ChangeAutoDiscardArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeAutoDiscardArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeAutoDiscardArgument`.
     * @returns {ChangeAutoDiscardArgument}
     */
    public static _from_object (_o: { [_K in keyof (ChangeAutoDiscardArgument)]: (ChangeAutoDiscardArgument)[_K] }): ChangeAutoDiscardArgument {
        return new ChangeAutoDiscardArgument(_o.auto_discard_expired_MMs, _o.auto_discard_obsolete_MMs);
    }


}

/**
 * @summary The Leading Root Component Types of ChangeAutoDiscardArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeAutoDiscardArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("auto-discard-expired-MMs", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("auto-discard-obsolete-MMs", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ChangeAutoDiscardArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeAutoDiscardArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeAutoDiscardArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeAutoDiscardArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeAutoDiscardArgument: $.ASN1Decoder<ChangeAutoDiscardArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeAutoDiscardArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeAutoDiscardArgument (el: _Element): ChangeAutoDiscardArgument {
    if (!_cached_decoder_for_ChangeAutoDiscardArgument) { _cached_decoder_for_ChangeAutoDiscardArgument = function (el: _Element): ChangeAutoDiscardArgument {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let auto_discard_expired_MMs!: BOOLEAN;
    let auto_discard_obsolete_MMs!: BOOLEAN;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "auto-discard-expired-MMs": (_el: _Element): void => { auto_discard_expired_MMs = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "auto-discard-obsolete-MMs": (_el: _Element): void => { auto_discard_obsolete_MMs = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ChangeAutoDiscardArgument,
        _extension_additions_list_spec_for_ChangeAutoDiscardArgument,
        _root_component_type_list_2_spec_for_ChangeAutoDiscardArgument,
        undefined,
    );
    return new ChangeAutoDiscardArgument( /* SET_CONSTRUCTOR_CALL */
        auto_discard_expired_MMs,
        auto_discard_obsolete_MMs
    );
}; }
    return _cached_decoder_for_ChangeAutoDiscardArgument(el);
}

let _cached_encoder_for_ChangeAutoDiscardArgument: $.ASN1Encoder<ChangeAutoDiscardArgument> | null = null;

/**
 * @summary Encodes a(n) ChangeAutoDiscardArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeAutoDiscardArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeAutoDiscardArgument (value: ChangeAutoDiscardArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeAutoDiscardArgument) { _cached_encoder_for_ChangeAutoDiscardArgument = function (value: ChangeAutoDiscardArgument): _Element {
    return $._encodeSet([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.auto_discard_expired_MMs, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.auto_discard_obsolete_MMs, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ChangeAutoDiscardArgument(value, elGetter);
}


/* eslint-enable */
