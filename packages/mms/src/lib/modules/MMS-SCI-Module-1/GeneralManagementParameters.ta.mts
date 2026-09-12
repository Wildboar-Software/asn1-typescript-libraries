/* eslint-disable */
import {
    INTEGER,
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
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
import { GeneralManagementParameters_supportForTime, _decode_GeneralManagementParameters_supportForTime, _encode_GeneralManagementParameters_supportForTime } from "../MMS-SCI-Module-1/GeneralManagementParameters-supportForTime.ta.mjs";
// export { GeneralManagementParameters_supportForTime, _decode_GeneralManagementParameters_supportForTime, _encode_GeneralManagementParameters_supportForTime } from "../MMS-SCI-Module-1/GeneralManagementParameters-supportForTime.ta.mjs";


/**
 * @summary GeneralManagementParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeneralManagementParameters ::= SEQUENCE {
 *     localDetail            [0] MMSString,
 *     supportForTime         [1] IMPLICIT SEQUENCE {
 *         timeOfDay              [2] IMPLICIT BOOLEAN,
 *         timeSequence           [3] IMPLICIT BOOLEAN
 *         },
 *     granularityOfTime      [4] IMPLICIT INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class GeneralManagementParameters {
    constructor (
        /**
         * @summary `localDetail`.
         * @public
         * @readonly
         */
        readonly localDetail: MMSString,
        /**
         * @summary `supportForTime`.
         * @public
         * @readonly
         */
        readonly supportForTime: GeneralManagementParameters_supportForTime,
        /**
         * @summary `granularityOfTime`.
         * @public
         * @readonly
         */
        readonly granularityOfTime: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a GeneralManagementParameters
     * @description
     * 
     * This takes an `object` and converts it to a `GeneralManagementParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GeneralManagementParameters`.
     * @returns {GeneralManagementParameters}
     */
    public static _from_object (_o: { [_K in keyof (GeneralManagementParameters)]: (GeneralManagementParameters)[_K] }): GeneralManagementParameters {
        return new GeneralManagementParameters(_o.localDetail, _o.supportForTime, _o.granularityOfTime);
    }


}

/**
 * @summary The Leading Root Component Types of GeneralManagementParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GeneralManagementParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("localDetail", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("supportForTime", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("granularityOfTime", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of GeneralManagementParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GeneralManagementParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GeneralManagementParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GeneralManagementParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GeneralManagementParameters: $.ASN1Decoder<GeneralManagementParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GeneralManagementParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GeneralManagementParameters (el: _Element): GeneralManagementParameters {
    if (!_cached_decoder_for_GeneralManagementParameters) { _cached_decoder_for_GeneralManagementParameters = function (el: _Element): GeneralManagementParameters {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("GeneralManagementParameters contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "localDetail";
    sequence[1].name = "supportForTime";
    sequence[2].name = "granularityOfTime";
    let localDetail!: MMSString;
    let supportForTime!: GeneralManagementParameters_supportForTime;
    let granularityOfTime!: INTEGER;
    localDetail = $._decode_explicit<MMSString>(() => _decode_MMSString)(sequence[0]);
    supportForTime = $._decode_implicit<GeneralManagementParameters_supportForTime>(() => _decode_GeneralManagementParameters_supportForTime)(sequence[1]);
    granularityOfTime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[2]);
    return new GeneralManagementParameters(
        localDetail,
        supportForTime,
        granularityOfTime,

    );
}; }
    return _cached_decoder_for_GeneralManagementParameters(el);
}

let _cached_encoder_for_GeneralManagementParameters: $.ASN1Encoder<GeneralManagementParameters> | null = null;

/**
 * @summary Encodes a(n) GeneralManagementParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralManagementParameters, encoded as an ASN.1 Element.
 */
export
function _encode_GeneralManagementParameters (value: GeneralManagementParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GeneralManagementParameters) { _cached_encoder_for_GeneralManagementParameters = function (value: GeneralManagementParameters): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_MMSString, $.BER)(value.localDetail, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GeneralManagementParameters_supportForTime, $.BER)(value.supportForTime, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.granularityOfTime, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GeneralManagementParameters(value, elGetter);
}


/* eslint-enable */
