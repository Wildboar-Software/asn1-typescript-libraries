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
import { AlarmEnrollmentSummary, _decode_AlarmEnrollmentSummary, _encode_AlarmEnrollmentSummary } from "../ISO-9506-MMS-1/AlarmEnrollmentSummary.ta.mjs";
// export { AlarmEnrollmentSummary, _decode_AlarmEnrollmentSummary, _encode_AlarmEnrollmentSummary } from "../ISO-9506-MMS-1/AlarmEnrollmentSummary.ta.mjs";


/**
 * @summary GetAlarmEnrollmentSummary_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAlarmEnrollmentSummary-Response ::= SEQUENCE {
 *    listOfAlarmEnrollmentSummary  [0] IMPLICIT SEQUENCE OF AlarmEnrollmentSummary,
 *    moreFollows                   [1] IMPLICIT BOOLEAN DEFAULT FALSE }
 * ```
 * 
 * @class
 */
export
class GetAlarmEnrollmentSummary_Response {
    constructor (
        /**
         * @summary `listOfAlarmEnrollmentSummary`.
         * @public
         * @readonly
         */
        readonly listOfAlarmEnrollmentSummary: AlarmEnrollmentSummary[],
        /**
         * @summary `moreFollows`.
         * @public
         * @readonly
         */
        readonly moreFollows: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a GetAlarmEnrollmentSummary_Response
     * @description
     * 
     * This takes an `object` and converts it to a `GetAlarmEnrollmentSummary_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetAlarmEnrollmentSummary_Response`.
     * @returns {GetAlarmEnrollmentSummary_Response}
     */
    public static _from_object (_o: { [_K in keyof (GetAlarmEnrollmentSummary_Response)]: (GetAlarmEnrollmentSummary_Response)[_K] }): GetAlarmEnrollmentSummary_Response {
        return new GetAlarmEnrollmentSummary_Response(_o.listOfAlarmEnrollmentSummary, _o.moreFollows);
    }

    /**
     * @summary Getter that returns the default value for `moreFollows`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_moreFollows () { return false; }
}

/**
 * @summary The Leading Root Component Types of GetAlarmEnrollmentSummary_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetAlarmEnrollmentSummary_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("listOfAlarmEnrollmentSummary", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("moreFollows", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of GetAlarmEnrollmentSummary_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetAlarmEnrollmentSummary_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetAlarmEnrollmentSummary_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetAlarmEnrollmentSummary_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetAlarmEnrollmentSummary_Response: $.ASN1Decoder<GetAlarmEnrollmentSummary_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAlarmEnrollmentSummary_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAlarmEnrollmentSummary_Response (el: _Element): GetAlarmEnrollmentSummary_Response {
    if (!_cached_decoder_for_GetAlarmEnrollmentSummary_Response) { _cached_decoder_for_GetAlarmEnrollmentSummary_Response = function (el: _Element): GetAlarmEnrollmentSummary_Response {
    let listOfAlarmEnrollmentSummary!: AlarmEnrollmentSummary[];
    let moreFollows: OPTIONAL<BOOLEAN> = GetAlarmEnrollmentSummary_Response._default_value_for_moreFollows;
    const callbacks: $.DecodingMap = {
        "listOfAlarmEnrollmentSummary": (_el: _Element): void => { listOfAlarmEnrollmentSummary = $._decode_implicit<AlarmEnrollmentSummary[]>(() => $._decodeSequenceOf<AlarmEnrollmentSummary>(() => _decode_AlarmEnrollmentSummary))(_el); },
        "moreFollows": (_el: _Element): void => { moreFollows = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetAlarmEnrollmentSummary_Response,
        _extension_additions_list_spec_for_GetAlarmEnrollmentSummary_Response,
        _root_component_type_list_2_spec_for_GetAlarmEnrollmentSummary_Response,
        undefined,
    );
    return new GetAlarmEnrollmentSummary_Response(
        listOfAlarmEnrollmentSummary,
        moreFollows
    );
}; }
    return _cached_decoder_for_GetAlarmEnrollmentSummary_Response(el);
}

let _cached_encoder_for_GetAlarmEnrollmentSummary_Response: $.ASN1Encoder<GetAlarmEnrollmentSummary_Response> | null = null;

/**
 * @summary Encodes a(n) GetAlarmEnrollmentSummary_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAlarmEnrollmentSummary_Response, encoded as an ASN.1 Element.
 */
export
function _encode_GetAlarmEnrollmentSummary_Response (value: GetAlarmEnrollmentSummary_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAlarmEnrollmentSummary_Response) { _cached_encoder_for_GetAlarmEnrollmentSummary_Response = function (value: GetAlarmEnrollmentSummary_Response): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<AlarmEnrollmentSummary>(() => _encode_AlarmEnrollmentSummary, $.BER), $.BER)(value.listOfAlarmEnrollmentSummary, $.BER),
            /* IF_DEFAULT */ (value.moreFollows === undefined || $.deepEq(value.moreFollows, GetAlarmEnrollmentSummary_Response._default_value_for_moreFollows) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.moreFollows, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetAlarmEnrollmentSummary_Response(value, elGetter);
}


/* eslint-enable */
