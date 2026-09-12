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
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary ReportJournalStatus_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportJournalStatus-Response ::= SEQUENCE {
 *    currentEntries             [0] IMPLICIT Unsigned32,
 *    mmsDeletable               [1] IMPLICIT BOOLEAN
 * ,  accessControlList          [2] IMPLICIT Identifier OPTIONAL
 *           -- Shall not appear in minor version one or two
 *    }
 * ```
 * 
 * @class
 */
export
class ReportJournalStatus_Response {
    constructor (
        /**
         * @summary `currentEntries`.
         * @public
         * @readonly
         */
        readonly currentEntries: Unsigned32,
        /**
         * @summary `mmsDeletable`.
         * @public
         * @readonly
         */
        readonly mmsDeletable: BOOLEAN,
        /**
         * @summary `accessControlList`.
         * @public
         * @readonly
         */
        readonly accessControlList: OPTIONAL<Identifier>
    ) {}

    /**
     * @summary Restructures an object into a ReportJournalStatus_Response
     * @description
     * 
     * This takes an `object` and converts it to a `ReportJournalStatus_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportJournalStatus_Response`.
     * @returns {ReportJournalStatus_Response}
     */
    public static _from_object (_o: { [_K in keyof (ReportJournalStatus_Response)]: (ReportJournalStatus_Response)[_K] }): ReportJournalStatus_Response {
        return new ReportJournalStatus_Response(_o.currentEntries, _o.mmsDeletable, _o.accessControlList);
    }


}

/**
 * @summary The Leading Root Component Types of ReportJournalStatus_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReportJournalStatus_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("currentEntries", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mmsDeletable", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("accessControlList", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ReportJournalStatus_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReportJournalStatus_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReportJournalStatus_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReportJournalStatus_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReportJournalStatus_Response: $.ASN1Decoder<ReportJournalStatus_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportJournalStatus_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportJournalStatus_Response (el: _Element): ReportJournalStatus_Response {
    if (!_cached_decoder_for_ReportJournalStatus_Response) { _cached_decoder_for_ReportJournalStatus_Response = function (el: _Element): ReportJournalStatus_Response {
    let currentEntries!: Unsigned32;
    let mmsDeletable!: BOOLEAN;
    let accessControlList: OPTIONAL<Identifier>;
    const callbacks: $.DecodingMap = {
        "currentEntries": (_el: _Element): void => { currentEntries = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(_el); },
        "mmsDeletable": (_el: _Element): void => { mmsDeletable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "accessControlList": (_el: _Element): void => { accessControlList = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReportJournalStatus_Response,
        _extension_additions_list_spec_for_ReportJournalStatus_Response,
        _root_component_type_list_2_spec_for_ReportJournalStatus_Response,
        undefined,
    );
    return new ReportJournalStatus_Response(
        currentEntries,
        mmsDeletable,
        accessControlList
    );
}; }
    return _cached_decoder_for_ReportJournalStatus_Response(el);
}

let _cached_encoder_for_ReportJournalStatus_Response: $.ASN1Encoder<ReportJournalStatus_Response> | null = null;

/**
 * @summary Encodes a(n) ReportJournalStatus_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportJournalStatus_Response, encoded as an ASN.1 Element.
 */
export
function _encode_ReportJournalStatus_Response (value: ReportJournalStatus_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportJournalStatus_Response) { _cached_encoder_for_ReportJournalStatus_Response = function (value: ReportJournalStatus_Response): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Unsigned32, $.BER)(value.currentEntries, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.mmsDeletable, $.BER),
            /* IF_ABSENT  */ ((value.accessControlList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_Identifier, $.BER)(value.accessControlList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReportJournalStatus_Response(value, elGetter);
}


/* eslint-enable */
