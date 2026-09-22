/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CircRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CircRecord ::= SEQUENCE {
 *    availableNow       [1]    IMPLICIT BOOLEAN,
 *    availablityDate    [2]    IMPLICIT InternationalString OPTIONAL,
 *    availableThru      [3]    IMPLICIT InternationalString OPTIONAL,
 *    restrictions       [4]    IMPLICIT InternationalString OPTIONAL,
 *    itemId             [5]    IMPLICIT InternationalString OPTIONAL,
 *    renewable          [6]    IMPLICIT BOOLEAN,
 *    onHold             [7]    IMPLICIT BOOLEAN,
 *    enumAndChron       [8]    IMPLICIT InternationalString OPTIONAL,
 *    midspine           [9]    IMPLICIT InternationalString OPTIONAL,
 *    temporaryLocation  [10]   IMPLICIT InternationalString OPTIONAL}
 * ```
 * 
 * @class
 */
export
class CircRecord {
    constructor (
        /**
         * @summary `availableNow`.
         * @public
         * @readonly
         */
        readonly availableNow: BOOLEAN,
        /**
         * @summary `availablityDate`.
         * @public
         * @readonly
         */
        readonly availablityDate: OPTIONAL<InternationalString>,
        /**
         * @summary `availableThru`.
         * @public
         * @readonly
         */
        readonly availableThru: OPTIONAL<InternationalString>,
        /**
         * @summary `restrictions`.
         * @public
         * @readonly
         */
        readonly restrictions: OPTIONAL<InternationalString>,
        /**
         * @summary `itemId`.
         * @public
         * @readonly
         */
        readonly itemId: OPTIONAL<InternationalString>,
        /**
         * @summary `renewable`.
         * @public
         * @readonly
         */
        readonly renewable: BOOLEAN,
        /**
         * @summary `onHold`.
         * @public
         * @readonly
         */
        readonly onHold: BOOLEAN,
        /**
         * @summary `enumAndChron`.
         * @public
         * @readonly
         */
        readonly enumAndChron: OPTIONAL<InternationalString>,
        /**
         * @summary `midspine`.
         * @public
         * @readonly
         */
        readonly midspine: OPTIONAL<InternationalString>,
        /**
         * @summary `temporaryLocation`.
         * @public
         * @readonly
         */
        readonly temporaryLocation: OPTIONAL<InternationalString>
    ) {}

    /**
     * @summary Restructures an object into a CircRecord
     * @description
     * 
     * This takes an `object` and converts it to a `CircRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CircRecord`.
     * @returns {CircRecord}
     */
    public static _from_object (_o: { [_K in keyof (CircRecord)]: (CircRecord)[_K] }): CircRecord {
        return new CircRecord(_o.availableNow, _o.availablityDate, _o.availableThru, _o.restrictions, _o.itemId, _o.renewable, _o.onHold, _o.enumAndChron, _o.midspine, _o.temporaryLocation);
    }


}

/**
 * @summary The Leading Root Component Types of CircRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CircRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("availableNow", false, $.hasTag(_TagClass.context, 1)),
    /* FIXME: availablityDate COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: availableThru COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: restrictions COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: itemId COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("renewable", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("onHold", false, $.hasTag(_TagClass.context, 7)),
    /* FIXME: enumAndChron COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: midspine COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: temporaryLocation COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of CircRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CircRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CircRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CircRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CircRecord: $.ASN1Decoder<CircRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CircRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CircRecord (el: _Element): CircRecord {
    if (!_cached_decoder_for_CircRecord) { _cached_decoder_for_CircRecord = function (el: _Element): CircRecord {
    let availableNow!: BOOLEAN;
    let availablityDate: OPTIONAL<InternationalString>;
    let availableThru: OPTIONAL<InternationalString>;
    let restrictions: OPTIONAL<InternationalString>;
    let itemId: OPTIONAL<InternationalString>;
    let renewable!: BOOLEAN;
    let onHold!: BOOLEAN;
    let enumAndChron: OPTIONAL<InternationalString>;
    let midspine: OPTIONAL<InternationalString>;
    let temporaryLocation: OPTIONAL<InternationalString>;
    const callbacks: $.DecodingMap = {
        "availableNow": (_el: _Element): void => { availableNow = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "availablityDate": (_el: _Element): void => { availablityDate = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "availableThru": (_el: _Element): void => { availableThru = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "restrictions": (_el: _Element): void => { restrictions = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "itemId": (_el: _Element): void => { itemId = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "renewable": (_el: _Element): void => { renewable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "onHold": (_el: _Element): void => { onHold = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "enumAndChron": (_el: _Element): void => { enumAndChron = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "midspine": (_el: _Element): void => { midspine = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "temporaryLocation": (_el: _Element): void => { temporaryLocation = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CircRecord,
        _extension_additions_list_spec_for_CircRecord,
        _root_component_type_list_2_spec_for_CircRecord,
        undefined,
    );
    return new CircRecord(
        availableNow,
        availablityDate,
        availableThru,
        restrictions,
        itemId,
        renewable,
        onHold,
        enumAndChron,
        midspine,
        temporaryLocation
    );
}; }
    return _cached_decoder_for_CircRecord(el);
}

let _cached_encoder_for_CircRecord: $.ASN1Encoder<CircRecord> | null = null;

/**
 * @summary Encodes a(n) CircRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CircRecord, encoded as an ASN.1 Element.
 */
export
function _encode_CircRecord (value: CircRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CircRecord) { _cached_encoder_for_CircRecord = function (value: CircRecord, elGetter: $.ASN1Encoder<CircRecord>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.availableNow, $.BER),
            /* IF_ABSENT  */ ((value.availablityDate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.availablityDate, $.BER)),
            /* IF_ABSENT  */ ((value.availableThru === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_InternationalString, $.BER)(value.availableThru, $.BER)),
            /* IF_ABSENT  */ ((value.restrictions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_InternationalString, $.BER)(value.restrictions, $.BER)),
            /* IF_ABSENT  */ ((value.itemId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_InternationalString, $.BER)(value.itemId, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.renewable, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.onHold, $.BER),
            /* IF_ABSENT  */ ((value.enumAndChron === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_InternationalString, $.BER)(value.enumAndChron, $.BER)),
            /* IF_ABSENT  */ ((value.midspine === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_InternationalString, $.BER)(value.midspine, $.BER)),
            /* IF_ABSENT  */ ((value.temporaryLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_InternationalString, $.BER)(value.temporaryLocation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CircRecord(value, elGetter);
}


/* eslint-enable */
