/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { PeriodToReview, _decode_PeriodToReview, _encode_PeriodToReview } from "../CSTA-review/PeriodToReview.ta.mjs";

import { MessageID, _decode_MessageID, _encode_MessageID } from "../CSTA-device-feature-types/MessageID.ta.mjs";

import { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../CSTA-device-feature-types/ResourceID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary ReviewArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReviewArgument ::= SEQUENCE
 * {    connection            ConnectionID,
 *     periodToReview            PeriodToReview,
 *     messageToReview            MessageID                OPTIONAL,  --corrected 06/2001
 *     resource            [0] IMPLICIT ResourceID            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ReviewArgument {
    constructor (
        /**
         * @summary `connection`.
         * @public
         * @readonly
         */
        readonly connection: ConnectionID,
        /**
         * @summary `periodToReview`.
         * @public
         * @readonly
         */
        readonly periodToReview: PeriodToReview,
        /**
         * @summary `messageToReview`.
         * @public
         * @readonly
         */
        readonly messageToReview: OPTIONAL<MessageID>,
        /**
         * @summary `resource`.
         * @public
         * @readonly
         */
        readonly resource: OPTIONAL<ResourceID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ReviewArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ReviewArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReviewArgument`.
     * @returns {ReviewArgument}
     */
    public static _from_object (_o: { [_K in keyof (ReviewArgument)]: (ReviewArgument)[_K] }): ReviewArgument {
        return new ReviewArgument(_o.connection, _o.periodToReview, _o.messageToReview, _o.resource, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of ReviewArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReviewArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("connection", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("periodToReview", false, $.hasAnyTag),
    new $.ComponentSpec("messageToReview", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("resource", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of ReviewArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReviewArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReviewArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReviewArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReviewArgument: $.ASN1Decoder<ReviewArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReviewArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReviewArgument (el: _Element): ReviewArgument {
    if (!_cached_decoder_for_ReviewArgument) { _cached_decoder_for_ReviewArgument = function (el: _Element): ReviewArgument {
    let connection!: ConnectionID;
    let periodToReview!: PeriodToReview;
    let messageToReview: OPTIONAL<MessageID>;
    let resource: OPTIONAL<ResourceID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "connection": (_el: _Element): void => { connection = _decode_ConnectionID(_el); },
        "periodToReview": (_el: _Element): void => { periodToReview = _decode_PeriodToReview(_el); },
        "messageToReview": (_el: _Element): void => { messageToReview = _decode_MessageID(_el); },
        "resource": (_el: _Element): void => { resource = $._decode_implicit<ResourceID>(() => _decode_ResourceID)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReviewArgument,
        _extension_additions_list_spec_for_ReviewArgument,
        _root_component_type_list_2_spec_for_ReviewArgument,
        undefined,
    );
    return new ReviewArgument(
        connection,
        periodToReview,
        messageToReview,
        resource,
        extensions
    );
}; }
    return _cached_decoder_for_ReviewArgument(el);
}

let _cached_encoder_for_ReviewArgument: $.ASN1Encoder<ReviewArgument> | null = null;

/**
 * @summary Encodes a(n) ReviewArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReviewArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ReviewArgument (value: ReviewArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReviewArgument) { _cached_encoder_for_ReviewArgument = function (value: ReviewArgument, elGetter: $.ASN1Encoder<ReviewArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connection, $.BER),
            /* REQUIRED   */ _encode_PeriodToReview(value.periodToReview, $.BER),
            /* IF_ABSENT  */ ((value.messageToReview === undefined) ? undefined : _encode_MessageID(value.messageToReview, $.BER)),
            /* IF_ABSENT  */ ((value.resource === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ResourceID, $.BER)(value.resource, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReviewArgument(value, elGetter);
}


/* eslint-enable */
