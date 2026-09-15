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

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary TransferCallArgument
 * @description
 *
 * Service request for Transfer Call (ECMA-269 §17.1.27 /
 * ECMA-285 §15.1.27). Names the two connections at the
 * transferring device (typically held primary and consultation).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransferCallArgument ::= SEQUENCE
 * {     heldCall             ConnectionID,
 *     activeCall             ConnectionID,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class TransferCallArgument {
    constructor (
        /**
         * @summary `heldCall`.
         * @description
         *
         * Mandatory. Transferring device's connection in the held
         * (or first) call. Initial Connected or Hold; becomes
         * Null.
         *
         * @public
         * @readonly
         */
        readonly heldCall: ConnectionID,
        /**
         * @summary `activeCall`.
         * @description
         *
         * Mandatory. Transferring device's connection in the
         * consultation (or second) call. Initial Connected or
         * Hold; becomes Null.
         *
         * @public
         * @readonly
         */
        readonly activeCall: ConnectionID,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional `CSTACommonArguments` carrying the security and
         * privateData parameters from the ECMA-269 service table.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a TransferCallArgument
     * @description
     * 
     * This takes an `object` and converts it to a `TransferCallArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TransferCallArgument`.
     * @returns {TransferCallArgument}
     */
    public static _from_object (_o: { [_K in keyof (TransferCallArgument)]: (TransferCallArgument)[_K] }): TransferCallArgument {
        return new TransferCallArgument(_o.heldCall, _o.activeCall, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of TransferCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TransferCallArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("heldCall", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("activeCall", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of TransferCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TransferCallArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TransferCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TransferCallArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TransferCallArgument: $.ASN1Decoder<TransferCallArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransferCallArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransferCallArgument (el: _Element): TransferCallArgument {
    if (!_cached_decoder_for_TransferCallArgument) { _cached_decoder_for_TransferCallArgument = function (el: _Element): TransferCallArgument {
    let heldCall!: ConnectionID;
    let activeCall!: ConnectionID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "heldCall": (_el: _Element): void => { heldCall = _decode_ConnectionID(_el); },
        "activeCall": (_el: _Element): void => { activeCall = _decode_ConnectionID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TransferCallArgument,
        _extension_additions_list_spec_for_TransferCallArgument,
        _root_component_type_list_2_spec_for_TransferCallArgument,
        undefined,
    );
    return new TransferCallArgument(
        heldCall,
        activeCall,
        extensions
    );
}; }
    return _cached_decoder_for_TransferCallArgument(el);
}

let _cached_encoder_for_TransferCallArgument: $.ASN1Encoder<TransferCallArgument> | null = null;

/**
 * @summary Encodes a(n) TransferCallArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransferCallArgument, encoded as an ASN.1 Element.
 */
export
function _encode_TransferCallArgument (value: TransferCallArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransferCallArgument) { _cached_encoder_for_TransferCallArgument = function (value: TransferCallArgument, elGetter: $.ASN1Encoder<TransferCallArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.heldCall, $.BER),
            /* REQUIRED   */ _encode_ConnectionID(value.activeCall, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TransferCallArgument(value, elGetter);
}


/* eslint-enable */
