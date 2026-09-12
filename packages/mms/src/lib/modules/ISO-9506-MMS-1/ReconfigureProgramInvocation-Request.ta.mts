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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary ReconfigureProgramInvocation_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReconfigureProgramInvocation-Request ::= SEQUENCE {
 *    oldProgramInvocationName      [0] IMPLICIT Identifier,
 *    newProgramInvocationName      [1] IMPLICIT Identifier OPTIONAL,
 *    domainsToAdd                  [2] IMPLICIT SEQUENCE OF Identifier,
 *    domainsToRemove               [3] IMPLICIT SEQUENCE OF Identifier }
 * ```
 * 
 * @class
 */
export
class ReconfigureProgramInvocation_Request {
    constructor (
        /**
         * @summary `oldProgramInvocationName`.
         * @public
         * @readonly
         */
        readonly oldProgramInvocationName: Identifier,
        /**
         * @summary `newProgramInvocationName`.
         * @public
         * @readonly
         */
        readonly newProgramInvocationName: OPTIONAL<Identifier>,
        /**
         * @summary `domainsToAdd`.
         * @public
         * @readonly
         */
        readonly domainsToAdd: Identifier[],
        /**
         * @summary `domainsToRemove`.
         * @public
         * @readonly
         */
        readonly domainsToRemove: Identifier[]
    ) {}

    /**
     * @summary Restructures an object into a ReconfigureProgramInvocation_Request
     * @description
     * 
     * This takes an `object` and converts it to a `ReconfigureProgramInvocation_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReconfigureProgramInvocation_Request`.
     * @returns {ReconfigureProgramInvocation_Request}
     */
    public static _from_object (_o: { [_K in keyof (ReconfigureProgramInvocation_Request)]: (ReconfigureProgramInvocation_Request)[_K] }): ReconfigureProgramInvocation_Request {
        return new ReconfigureProgramInvocation_Request(_o.oldProgramInvocationName, _o.newProgramInvocationName, _o.domainsToAdd, _o.domainsToRemove);
    }


}

/**
 * @summary The Leading Root Component Types of ReconfigureProgramInvocation_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReconfigureProgramInvocation_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("oldProgramInvocationName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("newProgramInvocationName", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("domainsToAdd", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("domainsToRemove", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ReconfigureProgramInvocation_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReconfigureProgramInvocation_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReconfigureProgramInvocation_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReconfigureProgramInvocation_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReconfigureProgramInvocation_Request: $.ASN1Decoder<ReconfigureProgramInvocation_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReconfigureProgramInvocation_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReconfigureProgramInvocation_Request (el: _Element): ReconfigureProgramInvocation_Request {
    if (!_cached_decoder_for_ReconfigureProgramInvocation_Request) { _cached_decoder_for_ReconfigureProgramInvocation_Request = function (el: _Element): ReconfigureProgramInvocation_Request {
    let oldProgramInvocationName!: Identifier;
    let newProgramInvocationName: OPTIONAL<Identifier>;
    let domainsToAdd!: Identifier[];
    let domainsToRemove!: Identifier[];
    const callbacks: $.DecodingMap = {
        "oldProgramInvocationName": (_el: _Element): void => { oldProgramInvocationName = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "newProgramInvocationName": (_el: _Element): void => { newProgramInvocationName = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "domainsToAdd": (_el: _Element): void => { domainsToAdd = $._decode_implicit<Identifier[]>(() => $._decodeSequenceOf<Identifier>(() => _decode_Identifier))(_el); },
        "domainsToRemove": (_el: _Element): void => { domainsToRemove = $._decode_implicit<Identifier[]>(() => $._decodeSequenceOf<Identifier>(() => _decode_Identifier))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReconfigureProgramInvocation_Request,
        _extension_additions_list_spec_for_ReconfigureProgramInvocation_Request,
        _root_component_type_list_2_spec_for_ReconfigureProgramInvocation_Request,
        undefined,
    );
    return new ReconfigureProgramInvocation_Request(
        oldProgramInvocationName,
        newProgramInvocationName,
        domainsToAdd,
        domainsToRemove
    );
}; }
    return _cached_decoder_for_ReconfigureProgramInvocation_Request(el);
}

let _cached_encoder_for_ReconfigureProgramInvocation_Request: $.ASN1Encoder<ReconfigureProgramInvocation_Request> | null = null;

/**
 * @summary Encodes a(n) ReconfigureProgramInvocation_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReconfigureProgramInvocation_Request, encoded as an ASN.1 Element.
 */
export
function _encode_ReconfigureProgramInvocation_Request (value: ReconfigureProgramInvocation_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReconfigureProgramInvocation_Request) { _cached_encoder_for_ReconfigureProgramInvocation_Request = function (value: ReconfigureProgramInvocation_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.oldProgramInvocationName, $.BER),
            /* IF_ABSENT  */ ((value.newProgramInvocationName === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_Identifier, $.BER)(value.newProgramInvocationName, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Identifier>(() => _encode_Identifier, $.BER), $.BER)(value.domainsToAdd, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<Identifier>(() => _encode_Identifier, $.BER), $.BER)(value.domainsToRemove, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReconfigureProgramInvocation_Request(value, elGetter);
}


/* eslint-enable */
