/* eslint-disable */
import {
    OPTIONAL,
    NULL,
    PrintableString,
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
import { Pointer, _decode_Pointer, _encode_Pointer } from "../ISO9041-VTP/Pointer.ta.mjs";
// export { Pointer, _decode_Pointer, _encode_Pointer } from "../ISO9041-VTP/Pointer.ta.mjs";
import { DOupdate_copyFromBuffer_structure, _decode_DOupdate_copyFromBuffer_structure, _encode_DOupdate_copyFromBuffer_structure } from "../ISO9041-VTP/DOupdate-copyFromBuffer-structure.ta.mjs";
// export { DOupdate_copyFromBuffer_structure, DOupdate_copyFromBuffer_structure_none /* IMPORTED_LONG_NAMED_INTEGER */, none /* IMPORTED_SHORT_NAMED_INTEGER */, DOupdate_copyFromBuffer_structure_x /* IMPORTED_LONG_NAMED_INTEGER */, x /* IMPORTED_SHORT_NAMED_INTEGER */, DOupdate_copyFromBuffer_structure_xAndy /* IMPORTED_LONG_NAMED_INTEGER */, xAndy /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DOupdate_copyFromBuffer_structure, _encode_DOupdate_copyFromBuffer_structure } from "../ISO9041-VTP/DOupdate-copyFromBuffer-structure.ta.mjs";


/**
 * @summary DOupdate_copyFromBuffer
 * @description
 *
 * COPY-FROM-BUFFER. Sets the display pointer to `address` then
 * obeys the sequence of DO updates in the named buffer. Requires
 * Ripple FU. ISO/IEC 9040:1997 §19.4.1.10.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DOupdate-copyFromBuffer ::= SEQUENCE {
 *     address Pointer,
 *     rioName  [10] IMPLICIT PrintableString OPTIONAL,
 *     recordId [11] IMPLICIT PrintableString OPTIONAL,
 *     -- when buffer-name is "temporary", rioName and recordId shall be absent;
 *     -- when there is only one RIO present in the VTE, rioName is optional,
 *     -- but recordId shall be present
 *     rendition [12] IMPLICIT NULL OPTIONAL,
 *     -- presence implies "copy attributes", absence implies "no attribute copy"
 *     structure [13] IMPLICIT INTEGER { none (0), x (1), xAndy (2) } OPTIONAL,
 *     -- absence implies "none"
 *     ripple [14] IMPLICIT NULL OPTIONAL
 *     -- presence implies "on", absence implies "off"
 * }
 * ```
 * 
 * @class
 */
export
class DOupdate_copyFromBuffer {
    constructor (
        /**
         * @summary `address`.
         * @description
         * Start-address; valid as an extent start. The display pointer
         * is set here before the buffer is replayed.
         * ISO/IEC 9040:1997 §19.4.1.10.3.
         * @public
         * @readonly
         */
        readonly address: Pointer,
        /**
         * @summary `rioName`.
         * @description
         * RIO name. SHALL be absent for the temporary buffer.
         * Optional when the VTE has a single RIO.
         * ISO/IEC 9040:1997 §19.4.1.10.3; ISO/IEC 9041-1:1997 §12.1.
         * @public
         * @readonly
         */
        readonly rioName: OPTIONAL<PrintableString>,
        /**
         * @summary `recordId`.
         * @description
         * RIO record identifier. SHALL be absent for the temporary
         * buffer; present when a RIO is the source.
         * ISO/IEC 9040:1997 §19.4.1.10.3; ISO/IEC 9041-1:1997 §12.1.
         * @public
         * @readonly
         */
        readonly recordId: OPTIONAL<PrintableString>,
        /**
         * @summary `rendition`.
         * @description
         * Present ⇒ `"copy attributes"`; absent ⇒
         * `"no attribute copy"`. ISO/IEC 9040:1997 §19.4.1.10.3.
         * @public
         * @readonly
         */
        readonly rendition: OPTIONAL<NULL>,
        /**
         * @summary `structure`.
         * @description
         * `none`(0), `x`(1) or `xAndy`(2). Absence implies `none`.
         * ISO/IEC 9040:1997 §19.4.1.10.3; ISO/IEC 9041-1:1997 §12.1.
         * @public
         * @readonly
         */
        readonly structure: OPTIONAL<DOupdate_copyFromBuffer_structure>,
        /**
         * @summary `ripple`.
         * @description
         * Present ⇒ `"on"`; absent ⇒ `"off"`. Ignored if ripple is
         * not enabled. ISO/IEC 9040:1997 §19.4.1.10.3.
         * @public
         * @readonly
         */
        readonly ripple: OPTIONAL<NULL>
    ) {}

    /**
     * @summary Restructures an object into a DOupdate_copyFromBuffer
     * @description
     * 
     * This takes an `object` and converts it to a `DOupdate_copyFromBuffer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DOupdate_copyFromBuffer`.
     * @returns {DOupdate_copyFromBuffer}
     */
    public static _from_object (_o: { [_K in keyof (DOupdate_copyFromBuffer)]: (DOupdate_copyFromBuffer)[_K] }): DOupdate_copyFromBuffer {
        return new DOupdate_copyFromBuffer(_o.address, _o.rioName, _o.recordId, _o.rendition, _o.structure, _o.ripple);
    }


}

/**
 * @summary The Leading Root Component Types of DOupdate_copyFromBuffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DOupdate_copyFromBuffer: $.ComponentSpec[] = [
    new $.ComponentSpec("address", false, $.hasAnyTag),
    new $.ComponentSpec("rioName", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("recordId", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("rendition", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("structure", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("ripple", true, $.hasTag(_TagClass.context, 14))
];

/**
 * @summary The Trailing Root Component Types of DOupdate_copyFromBuffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DOupdate_copyFromBuffer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DOupdate_copyFromBuffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DOupdate_copyFromBuffer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DOupdate_copyFromBuffer: $.ASN1Decoder<DOupdate_copyFromBuffer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DOupdate_copyFromBuffer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DOupdate_copyFromBuffer (el: _Element): DOupdate_copyFromBuffer {
    if (!_cached_decoder_for_DOupdate_copyFromBuffer) { _cached_decoder_for_DOupdate_copyFromBuffer = function (el: _Element): DOupdate_copyFromBuffer {
    let address!: Pointer;
    let rioName: OPTIONAL<PrintableString>;
    let recordId: OPTIONAL<PrintableString>;
    let rendition: OPTIONAL<NULL>;
    let structure: OPTIONAL<DOupdate_copyFromBuffer_structure>;
    let ripple: OPTIONAL<NULL>;
    const callbacks: $.DecodingMap = {
        "address": (_el: _Element): void => { address = _decode_Pointer(_el); },
        "rioName": (_el: _Element): void => { rioName = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "recordId": (_el: _Element): void => { recordId = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "rendition": (_el: _Element): void => { rendition = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "structure": (_el: _Element): void => { structure = $._decode_implicit<DOupdate_copyFromBuffer_structure>(() => _decode_DOupdate_copyFromBuffer_structure)(_el); },
        "ripple": (_el: _Element): void => { ripple = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DOupdate_copyFromBuffer,
        _extension_additions_list_spec_for_DOupdate_copyFromBuffer,
        _root_component_type_list_2_spec_for_DOupdate_copyFromBuffer,
        undefined,
    );
    return new DOupdate_copyFromBuffer(
        address,
        rioName,
        recordId,
        rendition,
        structure,
        ripple
    );
}; }
    return _cached_decoder_for_DOupdate_copyFromBuffer(el);
}

let _cached_encoder_for_DOupdate_copyFromBuffer: $.ASN1Encoder<DOupdate_copyFromBuffer> | null = null;

/**
 * @summary Encodes a(n) DOupdate_copyFromBuffer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DOupdate_copyFromBuffer, encoded as an ASN.1 Element.
 */
export
function _encode_DOupdate_copyFromBuffer (value: DOupdate_copyFromBuffer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DOupdate_copyFromBuffer) { _cached_encoder_for_DOupdate_copyFromBuffer = function (value: DOupdate_copyFromBuffer): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Pointer(value.address, $.BER),
            /* IF_ABSENT  */ ((value.rioName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodePrintableString, $.BER)(value.rioName, $.BER)),
            /* IF_ABSENT  */ ((value.recordId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodePrintableString, $.BER)(value.recordId, $.BER)),
            /* IF_ABSENT  */ ((value.rendition === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeNull, $.BER)(value.rendition, $.BER)),
            /* IF_ABSENT  */ ((value.structure === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_DOupdate_copyFromBuffer_structure, $.BER)(value.structure, $.BER)),
            /* IF_ABSENT  */ ((value.ripple === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeNull, $.BER)(value.ripple, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DOupdate_copyFromBuffer(value, elGetter);
}


/* eslint-enable */
