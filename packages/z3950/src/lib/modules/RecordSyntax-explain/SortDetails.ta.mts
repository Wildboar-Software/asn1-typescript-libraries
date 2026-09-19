/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
// export { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
import { SortKeyDetails, _decode_SortKeyDetails, _encode_SortKeyDetails } from "../RecordSyntax-explain/SortKeyDetails.ta.mjs";
// export { SortKeyDetails, _decode_SortKeyDetails, _encode_SortKeyDetails } from "../RecordSyntax-explain/SortKeyDetails.ta.mjs";


/**
 * @summary SortDetails
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortDetails ::= SEQUENCE {
 *   commonInfo       [0] IMPLICIT CommonInfo OPTIONAL,
 *    -- Key elements follow:
 *   databaseName     [1] IMPLICIT DatabaseName,
 *      -- No non-key brief elements
 *      -- Non-brief elements follow:
 *   sortKeys         [2] IMPLICIT SEQUENCE OF SortKeyDetails OPTIONAL
 *                            -- mandatory in full record
 *                }
 * ```
 * 
 * @class
 */
export
class SortDetails {
    constructor (
        /**
         * @summary `commonInfo`.
         * @public
         * @readonly
         */
        readonly commonInfo: OPTIONAL<CommonInfo>,
        /**
         * @summary `databaseName`.
         * @public
         * @readonly
         */
        readonly databaseName: DatabaseName,
        /**
         * @summary `sortKeys`.
         * @public
         * @readonly
         */
        readonly sortKeys: OPTIONAL<SortKeyDetails[]>
    ) {}

    /**
     * @summary Restructures an object into a SortDetails
     * @description
     * 
     * This takes an `object` and converts it to a `SortDetails`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SortDetails`.
     * @returns {SortDetails}
     */
    public static _from_object (_o: { [_K in keyof (SortDetails)]: (SortDetails)[_K] }): SortDetails {
        return new SortDetails(_o.commonInfo, _o.databaseName, _o.sortKeys);
    }


}

/**
 * @summary The Leading Root Component Types of SortDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SortDetails: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    /* FIXME: databaseName COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("sortKeys", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SortDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SortDetails: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SortDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SortDetails: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SortDetails: $.ASN1Decoder<SortDetails> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SortDetails
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SortDetails (el: _Element): SortDetails {
    if (!_cached_decoder_for_SortDetails) { _cached_decoder_for_SortDetails = function (el: _Element): SortDetails {
    let commonInfo: OPTIONAL<CommonInfo>;
    let databaseName!: DatabaseName;
    let sortKeys: OPTIONAL<SortKeyDetails[]>;
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "databaseName": (_el: _Element): void => { databaseName = $._decode_implicit<DatabaseName>(() => _decode_DatabaseName)(_el); },
        "sortKeys": (_el: _Element): void => { sortKeys = $._decode_implicit<SortKeyDetails[]>(() => $._decodeSequenceOf<SortKeyDetails>(() => _decode_SortKeyDetails))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SortDetails,
        _extension_additions_list_spec_for_SortDetails,
        _root_component_type_list_2_spec_for_SortDetails,
        undefined,
    );
    return new SortDetails(
        commonInfo,
        databaseName,
        sortKeys
    );
}; }
    return _cached_decoder_for_SortDetails(el);
}

let _cached_encoder_for_SortDetails: $.ASN1Encoder<SortDetails> | null = null;

/**
 * @summary Encodes a(n) SortDetails into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SortDetails, encoded as an ASN.1 Element.
 */
export
function _encode_SortDetails (value: SortDetails, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SortDetails) { _cached_encoder_for_SortDetails = function (value: SortDetails, elGetter: $.ASN1Encoder<SortDetails>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.commonInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DatabaseName, $.BER)(value.databaseName, $.BER),
            /* IF_ABSENT  */ ((value.sortKeys === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<SortKeyDetails>(() => _encode_SortKeyDetails, $.BER), $.BER)(value.sortKeys, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SortDetails(value, elGetter);
}


/* eslint-enable */
