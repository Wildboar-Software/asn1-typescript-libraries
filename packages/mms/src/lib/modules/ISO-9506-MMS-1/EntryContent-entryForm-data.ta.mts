/* eslint-disable */
import {
    OPTIONAL,
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
import { EntryContent_entryForm_data_event, _decode_EntryContent_entryForm_data_event, _encode_EntryContent_entryForm_data_event } from "../ISO-9506-MMS-1/EntryContent-entryForm-data-event.ta.mjs";
// export { EntryContent_entryForm_data_event, _decode_EntryContent_entryForm_data_event, _encode_EntryContent_entryForm_data_event } from "../ISO-9506-MMS-1/EntryContent-entryForm-data-event.ta.mjs";
import { Journal_Variable, _decode_Journal_Variable, _encode_Journal_Variable } from "../MMS-Object-Module-1/Journal-Variable.ta.mjs";
// export { Journal_Variable, _decode_Journal_Variable, _encode_Journal_Variable } from "../MMS-Object-Module-1/Journal-Variable.ta.mjs";


/**
 * @summary EntryContent_entryForm_data
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntryContent-entryForm-data ::= SEQUENCE {
 *     event [0] IMPLICIT SEQUENCE {
 *         eventConditionName [0] ObjectName,
 *         currentState [1] IMPLICIT EC-State
 *     } OPTIONAL,
 *     listOfVariables [1] IMPLICIT SEQUENCE OF Journal-Variable OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EntryContent_entryForm_data {
    constructor (
        /**
         * @summary `event`.
         * @public
         * @readonly
         */
        readonly event: OPTIONAL<EntryContent_entryForm_data_event>,
        /**
         * @summary `listOfVariables`.
         * @public
         * @readonly
         */
        readonly listOfVariables: OPTIONAL<Journal_Variable[]>
    ) {}

    /**
     * @summary Restructures an object into a EntryContent_entryForm_data
     * @description
     * 
     * This takes an `object` and converts it to a `EntryContent_entryForm_data`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntryContent_entryForm_data`.
     * @returns {EntryContent_entryForm_data}
     */
    public static _from_object (_o: { [_K in keyof (EntryContent_entryForm_data)]: (EntryContent_entryForm_data)[_K] }): EntryContent_entryForm_data {
        return new EntryContent_entryForm_data(_o.event, _o.listOfVariables);
    }


}

/**
 * @summary The Leading Root Component Types of EntryContent_entryForm_data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EntryContent_entryForm_data: $.ComponentSpec[] = [
    new $.ComponentSpec("event", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("listOfVariables", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EntryContent_entryForm_data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EntryContent_entryForm_data: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EntryContent_entryForm_data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EntryContent_entryForm_data: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EntryContent_entryForm_data: $.ASN1Decoder<EntryContent_entryForm_data> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryContent_entryForm_data
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntryContent_entryForm_data (el: _Element): EntryContent_entryForm_data {
    if (!_cached_decoder_for_EntryContent_entryForm_data) { _cached_decoder_for_EntryContent_entryForm_data = function (el: _Element): EntryContent_entryForm_data {
    let event: OPTIONAL<EntryContent_entryForm_data_event>;
    let listOfVariables: OPTIONAL<Journal_Variable[]>;
    const callbacks: $.DecodingMap = {
        "event": (_el: _Element): void => { event = $._decode_implicit<EntryContent_entryForm_data_event>(() => _decode_EntryContent_entryForm_data_event)(_el); },
        "listOfVariables": (_el: _Element): void => { listOfVariables = $._decode_implicit<Journal_Variable[]>(() => $._decodeSequenceOf<Journal_Variable>(() => _decode_Journal_Variable))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EntryContent_entryForm_data,
        _extension_additions_list_spec_for_EntryContent_entryForm_data,
        _root_component_type_list_2_spec_for_EntryContent_entryForm_data,
        undefined,
    );
    return new EntryContent_entryForm_data(
        event,
        listOfVariables
    );
}; }
    return _cached_decoder_for_EntryContent_entryForm_data(el);
}

let _cached_encoder_for_EntryContent_entryForm_data: $.ASN1Encoder<EntryContent_entryForm_data> | null = null;

/**
 * @summary Encodes a(n) EntryContent_entryForm_data into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryContent_entryForm_data, encoded as an ASN.1 Element.
 */
export
function _encode_EntryContent_entryForm_data (value: EntryContent_entryForm_data, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntryContent_entryForm_data) { _cached_encoder_for_EntryContent_entryForm_data = function (value: EntryContent_entryForm_data): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.event === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_EntryContent_entryForm_data_event, $.BER)(value.event, $.BER)),
            /* IF_ABSENT  */ ((value.listOfVariables === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Journal_Variable>(() => _encode_Journal_Variable, $.BER), $.BER)(value.listOfVariables, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EntryContent_entryForm_data(value, elGetter);
}


/* eslint-enable */
