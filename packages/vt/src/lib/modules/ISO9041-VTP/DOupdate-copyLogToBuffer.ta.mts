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
import { LogPointer, _decode_LogPointer, _encode_LogPointer } from "../ISO9041-VTP/LogPointer.ta.mjs";
// export { LogPointer, _decode_LogPointer, _encode_LogPointer } from "../ISO9041-VTP/LogPointer.ta.mjs";


/**
 * @summary DOupdate_copyLogToBuffer
 * @description
 *
 * Logical COPY-TO-BUFFER. Copies a logical extent into a RIO
 * record or the temporary buffer. `structure` present ⇒ `"x"`,
 * absent ⇒ `"none"`. ISO/IEC 9040:1997 §19.4.2.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DOupdate-copyLogToBuffer ::= SEQUENCE {
 *     address LogPointer,
 *     rioName  [8] IMPLICIT PrintableString OPTIONAL,
 *     recordId [9] IMPLICIT PrintableString OPTIONAL,
 *     -- when buffer-name is "temporary", rioName and recordId shall be absent;
 *     -- when there is only one RIO present in the VTE, rioName is optional,
 *     -- but recordId shall be present
 *     rendition [10] IMPLICIT NULL OPTIONAL,
 *     -- presence implies "copy attributes", absence implies "no attribute copy"
 *     structure [11] IMPLICIT NULL OPTIONAL
 *     -- presence implies "x", absence implies "none"
 * }
 * ```
 * 
 * @class
 */
export
class DOupdate_copyLogToBuffer {
    constructor (
        /**
         * @summary `address`.
         * @description
         * End of the logical copy extent. ISO/IEC 9040:1997 §19.4.2.5.
         * @public
         * @readonly
         */
        readonly address: LogPointer,
        /**
         * @summary `rioName`.
         * @description
         * RIO name. SHALL be absent for the temporary buffer.
         * Optional when the VTE has a single RIO.
         * ISO/IEC 9040:1997 §19.4.2.5; ISO/IEC 9041-1:1997 §12.1.
         * @public
         * @readonly
         */
        readonly rioName: OPTIONAL<PrintableString>,
        /**
         * @summary `recordId`.
         * @description
         * RIO record identifier. SHALL be absent for the temporary
         * buffer; present when a RIO is the target.
         * ISO/IEC 9040:1997 §19.4.2.5; ISO/IEC 9041-1:1997 §12.1.
         * @public
         * @readonly
         */
        readonly recordId: OPTIONAL<PrintableString>,
        /**
         * @summary `rendition`.
         * @description
         * Present ⇒ `"copy attributes"`; absent ⇒
         * `"no attribute copy"`. ISO/IEC 9040:1997 §19.4.2.5.
         * @public
         * @readonly
         */
        readonly rendition: OPTIONAL<NULL>,
        /**
         * @summary `structure`.
         * @description
         * Present ⇒ `"x"`; absent ⇒ `"none"`.
         * ISO/IEC 9040:1997 §19.4.2.5.
         * @public
         * @readonly
         */
        readonly structure: OPTIONAL<NULL>
    ) {}

    /**
     * @summary Restructures an object into a DOupdate_copyLogToBuffer
     * @description
     * 
     * This takes an `object` and converts it to a `DOupdate_copyLogToBuffer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DOupdate_copyLogToBuffer`.
     * @returns {DOupdate_copyLogToBuffer}
     */
    public static _from_object (_o: { [_K in keyof (DOupdate_copyLogToBuffer)]: (DOupdate_copyLogToBuffer)[_K] }): DOupdate_copyLogToBuffer {
        return new DOupdate_copyLogToBuffer(_o.address, _o.rioName, _o.recordId, _o.rendition, _o.structure);
    }


}

/**
 * @summary The Leading Root Component Types of DOupdate_copyLogToBuffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DOupdate_copyLogToBuffer: $.ComponentSpec[] = [
    new $.ComponentSpec("address", false, $.hasAnyTag),
    new $.ComponentSpec("rioName", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("recordId", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("rendition", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("structure", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of DOupdate_copyLogToBuffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DOupdate_copyLogToBuffer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DOupdate_copyLogToBuffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DOupdate_copyLogToBuffer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DOupdate_copyLogToBuffer: $.ASN1Decoder<DOupdate_copyLogToBuffer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DOupdate_copyLogToBuffer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DOupdate_copyLogToBuffer (el: _Element): DOupdate_copyLogToBuffer {
    if (!_cached_decoder_for_DOupdate_copyLogToBuffer) { _cached_decoder_for_DOupdate_copyLogToBuffer = function (el: _Element): DOupdate_copyLogToBuffer {
    let address!: LogPointer;
    let rioName: OPTIONAL<PrintableString>;
    let recordId: OPTIONAL<PrintableString>;
    let rendition: OPTIONAL<NULL>;
    let structure: OPTIONAL<NULL>;
    const callbacks: $.DecodingMap = {
        "address": (_el: _Element): void => { address = _decode_LogPointer(_el); },
        "rioName": (_el: _Element): void => { rioName = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "recordId": (_el: _Element): void => { recordId = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "rendition": (_el: _Element): void => { rendition = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "structure": (_el: _Element): void => { structure = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DOupdate_copyLogToBuffer,
        _extension_additions_list_spec_for_DOupdate_copyLogToBuffer,
        _root_component_type_list_2_spec_for_DOupdate_copyLogToBuffer,
        undefined,
    );
    return new DOupdate_copyLogToBuffer(
        address,
        rioName,
        recordId,
        rendition,
        structure
    );
}; }
    return _cached_decoder_for_DOupdate_copyLogToBuffer(el);
}

let _cached_encoder_for_DOupdate_copyLogToBuffer: $.ASN1Encoder<DOupdate_copyLogToBuffer> | null = null;

/**
 * @summary Encodes a(n) DOupdate_copyLogToBuffer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DOupdate_copyLogToBuffer, encoded as an ASN.1 Element.
 */
export
function _encode_DOupdate_copyLogToBuffer (value: DOupdate_copyLogToBuffer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DOupdate_copyLogToBuffer) { _cached_encoder_for_DOupdate_copyLogToBuffer = function (value: DOupdate_copyLogToBuffer): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LogPointer(value.address, $.BER),
            /* IF_ABSENT  */ ((value.rioName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodePrintableString, $.BER)(value.rioName, $.BER)),
            /* IF_ABSENT  */ ((value.recordId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodePrintableString, $.BER)(value.recordId, $.BER)),
            /* IF_ABSENT  */ ((value.rendition === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeNull, $.BER)(value.rendition, $.BER)),
            /* IF_ABSENT  */ ((value.structure === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER)(value.structure, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DOupdate_copyLogToBuffer(value, elGetter);
}


/* eslint-enable */
