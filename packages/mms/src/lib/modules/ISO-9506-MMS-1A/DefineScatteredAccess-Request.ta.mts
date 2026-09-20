/* eslint-disable */
import {
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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { ScatteredAccessDescription, _decode_ScatteredAccessDescription, _encode_ScatteredAccessDescription } from "../ISO-9506-MMS-1A/ScatteredAccessDescription.ta.mjs";


/**
 * @summary DefineScatteredAccess_Request
 * @description
 *
 * Confirmed request: create a Scattered Access
 * object — a named structured "variable" built
 * from Named, Unnamed, or Scattered Access
 * components. Name unique among Variable Name
 * and Scattered Access Name of the given scope.
 * CBB `vsca`. Informative Annex E.
 *
 * [ISO 9506-1:2003 Annex E, E.3]
 * [ISO 9506-2:2003 Annex E, E.2]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefineScatteredAccess-Request ::= SEQUENCE {
 *     scatteredAccessName              [0] ObjectName,
 *     scatteredAccessDescription       [1] IMPLICIT ScatteredAccessDescription }
 * ```
 * 
 * @class
 */
export
class DefineScatteredAccess_Request {
    constructor (
        /**
         * @summary `scatteredAccessName`.
         * @description
         *
         * Name uniquely identifying the Scattered
         * Access object at the VMD. Same name space
         * as Variable Name (VMD-, Domain-, or AA-
         * specific scope).
         *
         * [ISO 9506-1:2003 Annex E, E.3.1.1.1]
         *
         * @public
         * @readonly
         */
        readonly scatteredAccessName: ObjectName,
        /**
         * @summary `scatteredAccessDescription`.
         * @description
         *
         * Component variables (one or more) accessed
         * via the object. See E.2.1.
         *
         * [ISO 9506-1:2003 Annex E, E.3.1.1.2]
         *
         * @public
         * @readonly
         */
        readonly scatteredAccessDescription: ScatteredAccessDescription
    ) {}

    /**
     * @summary Restructures an object into a DefineScatteredAccess_Request
     * @description
     * 
     * This takes an `object` and converts it to a `DefineScatteredAccess_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DefineScatteredAccess_Request`.
     * @returns {DefineScatteredAccess_Request}
     */
    public static _from_object (_o: { [_K in keyof (DefineScatteredAccess_Request)]: (DefineScatteredAccess_Request)[_K] }): DefineScatteredAccess_Request {
        return new DefineScatteredAccess_Request(_o.scatteredAccessName, _o.scatteredAccessDescription);
    }


}

/**
 * @summary The Leading Root Component Types of DefineScatteredAccess_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DefineScatteredAccess_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("scatteredAccessName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("scatteredAccessDescription", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DefineScatteredAccess_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DefineScatteredAccess_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DefineScatteredAccess_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DefineScatteredAccess_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DefineScatteredAccess_Request: $.ASN1Decoder<DefineScatteredAccess_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DefineScatteredAccess_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DefineScatteredAccess_Request (el: _Element): DefineScatteredAccess_Request {
    if (!_cached_decoder_for_DefineScatteredAccess_Request) { _cached_decoder_for_DefineScatteredAccess_Request = function (el: _Element): DefineScatteredAccess_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DefineScatteredAccess-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "scatteredAccessName";
    sequence[1].name = "scatteredAccessDescription";
    let scatteredAccessName!: ObjectName;
    let scatteredAccessDescription!: ScatteredAccessDescription;
    scatteredAccessName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(sequence[0]);
    scatteredAccessDescription = $._decode_implicit<ScatteredAccessDescription>(() => _decode_ScatteredAccessDescription)(sequence[1]);
    return new DefineScatteredAccess_Request(
        scatteredAccessName,
        scatteredAccessDescription,

    );
}; }
    return _cached_decoder_for_DefineScatteredAccess_Request(el);
}

let _cached_encoder_for_DefineScatteredAccess_Request: $.ASN1Encoder<DefineScatteredAccess_Request> | null = null;

/**
 * @summary Encodes a(n) DefineScatteredAccess_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefineScatteredAccess_Request, encoded as an ASN.1 Element.
 */
export
function _encode_DefineScatteredAccess_Request (value: DefineScatteredAccess_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DefineScatteredAccess_Request) { _cached_encoder_for_DefineScatteredAccess_Request = function (value: DefineScatteredAccess_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.scatteredAccessName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ScatteredAccessDescription, $.BER)(value.scatteredAccessDescription, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DefineScatteredAccess_Request(value, elGetter);
}


/* eslint-enable */
