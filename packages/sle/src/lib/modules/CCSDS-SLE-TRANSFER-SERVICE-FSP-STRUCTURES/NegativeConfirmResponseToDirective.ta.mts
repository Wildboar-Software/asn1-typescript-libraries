/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DirectiveExecutedId, _decode_DirectiveExecutedId, _encode_DirectiveExecutedId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/DirectiveExecutedId.ta.mjs";
// export { DirectiveExecutedId, _decode_DirectiveExecutedId, _encode_DirectiveExecutedId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/DirectiveExecutedId.ta.mjs";
import { FopAlert, _decode_FopAlert, _encode_FopAlert } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FopAlert.ta.mjs";
// export { FopAlert, FopAlert_noAlert /* IMPORTED_LONG_NAMED_INTEGER */, noAlert /* IMPORTED_SHORT_NAMED_INTEGER */, FopAlert_limit /* IMPORTED_LONG_NAMED_INTEGER */, limit /* IMPORTED_SHORT_NAMED_INTEGER */, FopAlert_lockOutDetected /* IMPORTED_LONG_NAMED_INTEGER */, lockOutDetected /* IMPORTED_SHORT_NAMED_INTEGER */, FopAlert_synch /* IMPORTED_LONG_NAMED_INTEGER */, synch /* IMPORTED_SHORT_NAMED_INTEGER */, FopAlert_invalidNR /* IMPORTED_LONG_NAMED_INTEGER */, invalidNR /* IMPORTED_SHORT_NAMED_INTEGER */, FopAlert_clcw /* IMPORTED_LONG_NAMED_INTEGER */, clcw /* IMPORTED_SHORT_NAMED_INTEGER */, FopAlert_lowerLayerOutOfSync /* IMPORTED_LONG_NAMED_INTEGER */, lowerLayerOutOfSync /* IMPORTED_SHORT_NAMED_INTEGER */, FopAlert_terminateADService /* IMPORTED_LONG_NAMED_INTEGER */, terminateADService /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_FopAlert, _encode_FopAlert } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FopAlert.ta.mjs";


/**
 * @summary NegativeConfirmResponseToDirective
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NegativeConfirmResponseToDirective ::= SEQUENCE
 * {  directiveExecutedId                 DirectiveExecutedId
 * ,  fopAlert                            FopAlert
 * }
 * ```
 * 
 * @class
 */
export
class NegativeConfirmResponseToDirective {
    /**
     * @summary `directiveExecutedId`.
     * @public
     * @readonly
     */
    readonly directiveExecutedId: DirectiveExecutedId;
    /**
     * @summary `fopAlert`.
     * @public
     * @readonly
     */
    readonly fopAlert: FopAlert;

    constructor (
        directiveExecutedId: DirectiveExecutedId,
        fopAlert: FopAlert
    ) {
        this.directiveExecutedId = directiveExecutedId;
        this.fopAlert = fopAlert;
    }

    /**
     * @summary Restructures an object into a NegativeConfirmResponseToDirective
     * @description
     * 
     * This takes an `object` and converts it to a `NegativeConfirmResponseToDirective`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NegativeConfirmResponseToDirective`.
     * @returns {NegativeConfirmResponseToDirective}
     */
    public static _from_object (_o: { [_K in keyof (NegativeConfirmResponseToDirective)]: (NegativeConfirmResponseToDirective)[_K] }): NegativeConfirmResponseToDirective {
        return new NegativeConfirmResponseToDirective(_o.directiveExecutedId, _o.fopAlert);
    }


}

/**
 * @summary The Leading Root Component Types of NegativeConfirmResponseToDirective
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NegativeConfirmResponseToDirective: $.ComponentSpec[] = [
    new $.ComponentSpec("directiveExecutedId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("fopAlert", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of NegativeConfirmResponseToDirective
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NegativeConfirmResponseToDirective: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NegativeConfirmResponseToDirective
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NegativeConfirmResponseToDirective: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NegativeConfirmResponseToDirective: $.ASN1Decoder<NegativeConfirmResponseToDirective> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NegativeConfirmResponseToDirective
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NegativeConfirmResponseToDirective (el: _Element): NegativeConfirmResponseToDirective {
    if (!_cached_decoder_for_NegativeConfirmResponseToDirective) { _cached_decoder_for_NegativeConfirmResponseToDirective = function (el: _Element): NegativeConfirmResponseToDirective {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("NegativeConfirmResponseToDirective contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "directiveExecutedId";
    sequence[1].name = "fopAlert";
    let directiveExecutedId!: DirectiveExecutedId;
    let fopAlert!: FopAlert;
    directiveExecutedId = _decode_DirectiveExecutedId(sequence[0]);
    fopAlert = _decode_FopAlert(sequence[1]);
    return new NegativeConfirmResponseToDirective(
        directiveExecutedId,
        fopAlert,

    );
}; }
    return _cached_decoder_for_NegativeConfirmResponseToDirective(el);
}

let _cached_encoder_for_NegativeConfirmResponseToDirective: $.ASN1Encoder<NegativeConfirmResponseToDirective> | null = null;

/**
 * @summary Encodes a(n) NegativeConfirmResponseToDirective into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NegativeConfirmResponseToDirective, encoded as an ASN.1 Element.
 */
export
function _encode_NegativeConfirmResponseToDirective (value: NegativeConfirmResponseToDirective, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NegativeConfirmResponseToDirective) { _cached_encoder_for_NegativeConfirmResponseToDirective = function (value: NegativeConfirmResponseToDirective, elGetter: $.ASN1Encoder<NegativeConfirmResponseToDirective>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_DirectiveExecutedId(value.directiveExecutedId, $.BER),
        /* REQUIRED   */ _encode_FopAlert(value.fopAlert, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_NegativeConfirmResponseToDirective(value, elGetter);
}


/* eslint-enable */
