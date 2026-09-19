/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
// export { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
import { AttributeSetDetails, _decode_AttributeSetDetails, _encode_AttributeSetDetails } from "../RecordSyntax-explain/AttributeSetDetails.ta.mjs";
// export { AttributeSetDetails, _decode_AttributeSetDetails, _encode_AttributeSetDetails } from "../RecordSyntax-explain/AttributeSetDetails.ta.mjs";
import { AttributeCombinations, _decode_AttributeCombinations, _encode_AttributeCombinations } from "../RecordSyntax-explain/AttributeCombinations.ta.mjs";
// export { AttributeCombinations, _decode_AttributeCombinations, _encode_AttributeCombinations } from "../RecordSyntax-explain/AttributeCombinations.ta.mjs";


/**
 * @summary AttributeDetails
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeDetails ::= SEQUENCE {
 *   commonInfo              [0] IMPLICIT CommonInfo OPTIONAL,
 *      -- Key elements follow:
 *   databaseName            [1] IMPLICIT DatabaseName,
 *      -- Non-brief elements follow:
 *   attributesBySet         [2] IMPLICIT SEQUENCE OF AttributeSetDetails
 *                                     OPTIONAL, 
 *                                 -- mandatory in full record
 *   attributeCombinations   [3] IMPLICIT AttributeCombinations OPTIONAL}
 * ```
 * 
 * @class
 */
export
class AttributeDetails {
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
         * @summary `attributesBySet`.
         * @public
         * @readonly
         */
        readonly attributesBySet: OPTIONAL<AttributeSetDetails[]>,
        /**
         * @summary `attributeCombinations`.
         * @public
         * @readonly
         */
        readonly attributeCombinations: OPTIONAL<AttributeCombinations>
    ) {}

    /**
     * @summary Restructures an object into a AttributeDetails
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeDetails`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeDetails`.
     * @returns {AttributeDetails}
     */
    public static _from_object (_o: { [_K in keyof (AttributeDetails)]: (AttributeDetails)[_K] }): AttributeDetails {
        return new AttributeDetails(_o.commonInfo, _o.databaseName, _o.attributesBySet, _o.attributeCombinations);
    }


}

/**
 * @summary The Leading Root Component Types of AttributeDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeDetails: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    /* FIXME: databaseName COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("attributesBySet", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("attributeCombinations", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AttributeDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeDetails: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeDetails: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeDetails: $.ASN1Decoder<AttributeDetails> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeDetails
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeDetails (el: _Element): AttributeDetails {
    if (!_cached_decoder_for_AttributeDetails) { _cached_decoder_for_AttributeDetails = function (el: _Element): AttributeDetails {
    let commonInfo: OPTIONAL<CommonInfo>;
    let databaseName!: DatabaseName;
    let attributesBySet: OPTIONAL<AttributeSetDetails[]>;
    let attributeCombinations: OPTIONAL<AttributeCombinations>;
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "databaseName": (_el: _Element): void => { databaseName = $._decode_implicit<DatabaseName>(() => _decode_DatabaseName)(_el); },
        "attributesBySet": (_el: _Element): void => { attributesBySet = $._decode_implicit<AttributeSetDetails[]>(() => $._decodeSequenceOf<AttributeSetDetails>(() => _decode_AttributeSetDetails))(_el); },
        "attributeCombinations": (_el: _Element): void => { attributeCombinations = $._decode_implicit<AttributeCombinations>(() => _decode_AttributeCombinations)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeDetails,
        _extension_additions_list_spec_for_AttributeDetails,
        _root_component_type_list_2_spec_for_AttributeDetails,
        undefined,
    );
    return new AttributeDetails(
        commonInfo,
        databaseName,
        attributesBySet,
        attributeCombinations
    );
}; }
    return _cached_decoder_for_AttributeDetails(el);
}

let _cached_encoder_for_AttributeDetails: $.ASN1Encoder<AttributeDetails> | null = null;

/**
 * @summary Encodes a(n) AttributeDetails into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeDetails, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeDetails (value: AttributeDetails, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeDetails) { _cached_encoder_for_AttributeDetails = function (value: AttributeDetails, elGetter: $.ASN1Encoder<AttributeDetails>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.commonInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DatabaseName, $.BER)(value.databaseName, $.BER),
            /* IF_ABSENT  */ ((value.attributesBySet === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<AttributeSetDetails>(() => _encode_AttributeSetDetails, $.BER), $.BER)(value.attributesBySet, $.BER)),
            /* IF_ABSENT  */ ((value.attributeCombinations === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AttributeCombinations, $.BER)(value.attributeCombinations, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttributeDetails(value, elGetter);
}


/* eslint-enable */
