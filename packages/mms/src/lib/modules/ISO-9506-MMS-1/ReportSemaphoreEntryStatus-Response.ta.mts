/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
import { SemaphoreEntry, _decode_SemaphoreEntry, _encode_SemaphoreEntry } from "../ISO-9506-MMS-1/SemaphoreEntry.ta.mjs";
// export { SemaphoreEntry, _decode_SemaphoreEntry, _encode_SemaphoreEntry } from "../ISO-9506-MMS-1/SemaphoreEntry.ta.mjs";


/**
 * @summary ReportSemaphoreEntryStatus_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportSemaphoreEntryStatus-Response ::= SEQUENCE {
 *    listOfSemaphoreEntry       [0] IMPLICIT SEQUENCE OF SemaphoreEntry,
 *    moreFollows                [1] IMPLICIT BOOLEAN DEFAULT TRUE    }
 * ```
 * 
 * @class
 */
export
class ReportSemaphoreEntryStatus_Response {
    constructor (
        /**
         * @summary `listOfSemaphoreEntry`.
         * @public
         * @readonly
         */
        readonly listOfSemaphoreEntry: SemaphoreEntry[],
        /**
         * @summary `moreFollows`.
         * @public
         * @readonly
         */
        readonly moreFollows: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a ReportSemaphoreEntryStatus_Response
     * @description
     * 
     * This takes an `object` and converts it to a `ReportSemaphoreEntryStatus_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportSemaphoreEntryStatus_Response`.
     * @returns {ReportSemaphoreEntryStatus_Response}
     */
    public static _from_object (_o: { [_K in keyof (ReportSemaphoreEntryStatus_Response)]: (ReportSemaphoreEntryStatus_Response)[_K] }): ReportSemaphoreEntryStatus_Response {
        return new ReportSemaphoreEntryStatus_Response(_o.listOfSemaphoreEntry, _o.moreFollows);
    }

    /**
     * @summary Getter that returns the default value for `moreFollows`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_moreFollows () { return true; }
}

/**
 * @summary The Leading Root Component Types of ReportSemaphoreEntryStatus_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReportSemaphoreEntryStatus_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("listOfSemaphoreEntry", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("moreFollows", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ReportSemaphoreEntryStatus_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReportSemaphoreEntryStatus_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReportSemaphoreEntryStatus_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReportSemaphoreEntryStatus_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReportSemaphoreEntryStatus_Response: $.ASN1Decoder<ReportSemaphoreEntryStatus_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportSemaphoreEntryStatus_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportSemaphoreEntryStatus_Response (el: _Element): ReportSemaphoreEntryStatus_Response {
    if (!_cached_decoder_for_ReportSemaphoreEntryStatus_Response) { _cached_decoder_for_ReportSemaphoreEntryStatus_Response = function (el: _Element): ReportSemaphoreEntryStatus_Response {
    let listOfSemaphoreEntry!: SemaphoreEntry[];
    let moreFollows: OPTIONAL<BOOLEAN> = ReportSemaphoreEntryStatus_Response._default_value_for_moreFollows;
    const callbacks: $.DecodingMap = {
        "listOfSemaphoreEntry": (_el: _Element): void => { listOfSemaphoreEntry = $._decode_implicit<SemaphoreEntry[]>(() => $._decodeSequenceOf<SemaphoreEntry>(() => _decode_SemaphoreEntry))(_el); },
        "moreFollows": (_el: _Element): void => { moreFollows = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReportSemaphoreEntryStatus_Response,
        _extension_additions_list_spec_for_ReportSemaphoreEntryStatus_Response,
        _root_component_type_list_2_spec_for_ReportSemaphoreEntryStatus_Response,
        undefined,
    );
    return new ReportSemaphoreEntryStatus_Response(
        listOfSemaphoreEntry,
        moreFollows
    );
}; }
    return _cached_decoder_for_ReportSemaphoreEntryStatus_Response(el);
}

let _cached_encoder_for_ReportSemaphoreEntryStatus_Response: $.ASN1Encoder<ReportSemaphoreEntryStatus_Response> | null = null;

/**
 * @summary Encodes a(n) ReportSemaphoreEntryStatus_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportSemaphoreEntryStatus_Response, encoded as an ASN.1 Element.
 */
export
function _encode_ReportSemaphoreEntryStatus_Response (value: ReportSemaphoreEntryStatus_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportSemaphoreEntryStatus_Response) { _cached_encoder_for_ReportSemaphoreEntryStatus_Response = function (value: ReportSemaphoreEntryStatus_Response): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<SemaphoreEntry>(() => _encode_SemaphoreEntry, $.BER), $.BER)(value.listOfSemaphoreEntry, $.BER),
            /* IF_DEFAULT */ (value.moreFollows === undefined || $.deepEq(value.moreFollows, ReportSemaphoreEntryStatus_Response._default_value_for_moreFollows) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.moreFollows, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReportSemaphoreEntryStatus_Response(value, elGetter);
}


/* eslint-enable */
