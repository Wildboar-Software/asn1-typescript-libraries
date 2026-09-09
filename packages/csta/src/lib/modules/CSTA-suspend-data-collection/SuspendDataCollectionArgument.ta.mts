/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DcollCrossRefID, _decode_DcollCrossRefID, _encode_DcollCrossRefID } from "../CSTA-data-collection/DcollCrossRefID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SuspendDataCollectionArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuspendDataCollectionArgument ::= SEQUENCE
 * {    dcollCrossRefID            DcollCrossRefID,
 *     extensions             CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SuspendDataCollectionArgument {
    constructor (
        /**
         * @summary `dcollCrossRefID`.
         * @public
         * @readonly
         */
        readonly dcollCrossRefID: DcollCrossRefID,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SuspendDataCollectionArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SuspendDataCollectionArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SuspendDataCollectionArgument`.
     * @returns {SuspendDataCollectionArgument}
     */
    public static _from_object (_o: { [_K in keyof (SuspendDataCollectionArgument)]: (SuspendDataCollectionArgument)[_K] }): SuspendDataCollectionArgument {
        return new SuspendDataCollectionArgument(_o.dcollCrossRefID, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SuspendDataCollectionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SuspendDataCollectionArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("dcollCrossRefID", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SuspendDataCollectionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SuspendDataCollectionArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SuspendDataCollectionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SuspendDataCollectionArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SuspendDataCollectionArgument: $.ASN1Decoder<SuspendDataCollectionArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuspendDataCollectionArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuspendDataCollectionArgument (el: _Element): SuspendDataCollectionArgument {
    if (!_cached_decoder_for_SuspendDataCollectionArgument) { _cached_decoder_for_SuspendDataCollectionArgument = function (el: _Element): SuspendDataCollectionArgument {
    let dcollCrossRefID!: DcollCrossRefID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "dcollCrossRefID": (_el: _Element): void => { dcollCrossRefID = _decode_DcollCrossRefID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SuspendDataCollectionArgument,
        _extension_additions_list_spec_for_SuspendDataCollectionArgument,
        _root_component_type_list_2_spec_for_SuspendDataCollectionArgument,
        undefined,
    );
    return new SuspendDataCollectionArgument(
        dcollCrossRefID,
        extensions
    );
}; }
    return _cached_decoder_for_SuspendDataCollectionArgument(el);
}

let _cached_encoder_for_SuspendDataCollectionArgument: $.ASN1Encoder<SuspendDataCollectionArgument> | null = null;

/**
 * @summary Encodes a(n) SuspendDataCollectionArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuspendDataCollectionArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SuspendDataCollectionArgument (value: SuspendDataCollectionArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuspendDataCollectionArgument) { _cached_encoder_for_SuspendDataCollectionArgument = function (value: SuspendDataCollectionArgument, elGetter: $.ASN1Encoder<SuspendDataCollectionArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DcollCrossRefID(value.dcollCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SuspendDataCollectionArgument(value, elGetter);
}


/* eslint-enable */
