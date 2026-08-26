/* eslint-disable */
import type { ALGORITHM } from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/ALGORITHM.oca.mjs";
import { scrypt } from "../Scrypt-0/scrypt.oa.mjs";



/**
 * @summary PBES2_KDFs
 * @description
 *
 * Extension of the PBES2 KDF algorithm set to include scrypt, so
 * scrypt can be used as the KDF under PBES2 in PKCS #8 [RFC 5208] and
 * Asymmetric Key Packages [RFC 5958] (RFC 7914 §7). This module’s set
 * contains `scrypt` (`Scrypt-params` identified by `id-scrypt`); the
 * open type (`...`) allows further KDFs.
 *
 * RFC 7914 §7 writes the corresponding ASN.1 as:
 *
 * > `PBES2-KDFs ALGORITHM-IDENTIFIER ::= { {scrypt-params IDENTIFIED BY id-scrypt}, ... }`
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBES2-KDFs ALGORITHM ::= { scrypt, ... }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export
const PBES2_KDFs: (ALGORITHM)[] = [ scrypt, ];

/* eslint-enable */
