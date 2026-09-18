/* eslint-disable */
import {
    OPTIONAL,
    NULL,
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
import { ObjectUpdate, _decode_ObjectUpdate, _encode_ObjectUpdate } from "../ISO9041-VTP/ObjectUpdate.ta.mjs";
// export { ObjectUpdate, _decode_ObjectUpdate, _encode_ObjectUpdate } from "../ISO9041-VTP/ObjectUpdate.ta.mjs";


/**
 * @summary NDQcontent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NDQcontent ::= SEQUENCE {
 *     updates    [0] IMPLICIT SEQUENCE OF ObjectUpdate,
 *     echoNow    [1] IMPLICIT NULL OPTIONAL,
 *     startEntry [2] IMPLICIT NULL OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NDQcontent {
    constructor (
        /**
         * @summary `updates`.
         * @public
         * @readonly
         */
        readonly updates: ObjectUpdate[],
        /**
         * @summary `echoNow`.
         * @public
         * @readonly
         */
        readonly echoNow: OPTIONAL<NULL>,
        /**
         * @summary `startEntry`.
         * @public
         * @readonly
         */
        readonly startEntry: OPTIONAL<NULL>
    ) {}

    /**
     * @summary Restructures an object into a NDQcontent
     * @description
     * 
     * This takes an `object` and converts it to a `NDQcontent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NDQcontent`.
     * @returns {NDQcontent}
     */
    public static _from_object (_o: { [_K in keyof (NDQcontent)]: (NDQcontent)[_K] }): NDQcontent {
        return new NDQcontent(_o.updates, _o.echoNow, _o.startEntry);
    }


}

/**
 * @summary The Leading Root Component Types of NDQcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NDQcontent: $.ComponentSpec[] = [
    new $.ComponentSpec("updates", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("echoNow", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("startEntry", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of NDQcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NDQcontent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NDQcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NDQcontent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NDQcontent: $.ASN1Decoder<NDQcontent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NDQcontent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NDQcontent (el: _Element): NDQcontent {
    if (!_cached_decoder_for_NDQcontent) { _cached_decoder_for_NDQcontent = function (el: _Element): NDQcontent {
    let updates!: ObjectUpdate[];
    let echoNow: OPTIONAL<NULL>;
    let startEntry: OPTIONAL<NULL>;
    const callbacks: $.DecodingMap = {
        "updates": (_el: _Element): void => { updates = $._decode_implicit<ObjectUpdate[]>(() => $._decodeSequenceOf<ObjectUpdate>(() => _decode_ObjectUpdate))(_el); },
        "echoNow": (_el: _Element): void => { echoNow = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "startEntry": (_el: _Element): void => { startEntry = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NDQcontent,
        _extension_additions_list_spec_for_NDQcontent,
        _root_component_type_list_2_spec_for_NDQcontent,
        undefined,
    );
    return new NDQcontent(
        updates,
        echoNow,
        startEntry
    );
}; }
    return _cached_decoder_for_NDQcontent(el);
}

let _cached_encoder_for_NDQcontent: $.ASN1Encoder<NDQcontent> | null = null;

/**
 * @summary Encodes a(n) NDQcontent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NDQcontent, encoded as an ASN.1 Element.
 */
export
function _encode_NDQcontent (value: NDQcontent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NDQcontent) { _cached_encoder_for_NDQcontent = function (value: NDQcontent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<ObjectUpdate>(() => _encode_ObjectUpdate, $.BER), $.BER)(value.updates, $.BER),
            /* IF_ABSENT  */ ((value.echoNow === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.echoNow, $.BER)),
            /* IF_ABSENT  */ ((value.startEntry === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.startEntry, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NDQcontent(value, elGetter);
}


/* eslint-enable */
